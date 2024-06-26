import { component$, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';
import { WelcomeSection } from '~/components/welcome-section/welcome-section';
import { UserStatsSection } from '~/components/user-stats-section/user-stats-section';
import { RecentProjectsSection } from '~/components/recent-projects-section/recent-projects-section';

const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic

export const useRecentProjects = routeLoader$(async ({ fail }) => {
  const { data, error } = await supabase
    .from('profiler_personas')
    .select('business, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    return fail(500, { error: error.message });
  }

  const businessCounts = data.reduce((acc, current) => {
    acc[current.business] = (acc[current.business] || 0) + 1;
    return acc;
  }, {});

  const recentProjects = Object.entries(businessCounts).map(([business, count]) => {
    const latestProject = data.find(item => item.business === business);
    return {
      business,
      date: new Date(latestProject.created_at).toISOString().split('T')[0],
      personas: count,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  return recentProjects;
});

export default component$(() => {
  const welcomeMessage = useSignal('Welcome to your Flashmark Tools Dashboard!');
  const userStats = useSignal({
    toolsUsed: 5,
    personasCreated: 10,
    totalHoursSaved: 25,
    remainingTokens: 100,
  });
  const recentProjects = useRecentProjects();

  return (
    <div class="flex flex-col h-full">
      <h1 class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full ">Dashboard</h1>
      <div class="grid grid-cols-2 h-full gap-4 p-4">
        <div class="w-full h-full">
          <WelcomeSection welcomeMessage={welcomeMessage} />
        </div>
        <div class="w-full h-full">
          <UserStatsSection userStats={userStats} />
        </div>
      <div class="w-full h-full col-span-2 flex-grow">
        <RecentProjectsSection recentProjects={recentProjects} />
      </div>
      </div>
    </div>
  );
});
