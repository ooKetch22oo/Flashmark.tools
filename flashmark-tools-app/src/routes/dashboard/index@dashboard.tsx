import { component$, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';
import { WelcomeSection } from '~/components/welcome-section/welcome-section';
import { UserStatsSection } from '~/components/user-stats-section/user-stats-section';
import { RecentProjectsSection } from '~/components/recent-projects-section/recent-projects-section';

const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic

export interface Project {
  business: string;
  date: string;
  personas: number;
}

export const useRecentProjects = routeLoader$<Project[]>(async ({ fail }) => {
  const { data, error } = await supabase
    .from('profiler_personas')
    .select('business, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    return fail(500, { error: error.message });
  }

  const businessMap = new Map<string, Project>();

  data.forEach(item => {
    if (!businessMap.has(item.business)) {
      businessMap.set(item.business, {
        business: item.business,
        date: new Date(item.created_at).toISOString().split('T')[0],
        personas: 1
      });
    } else {
      const project = businessMap.get(item.business);
      if (project) {
        project.personas += 1;
      }
    }
  });

  const recentProjects = Array.from(businessMap.values())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

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
      <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full">
        <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">Dashboard</h1>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grow overflow-auto">
        <WelcomeSection welcomeMessage={welcomeMessage} />
        <UserStatsSection userStats={userStats} />
        <div class="col-span-1 md:col-span-2">
          <RecentProjectsSection recentProjects={useSignal(recentProjects.value)} />
        </div>
      </div>
    </div>
  );
});
