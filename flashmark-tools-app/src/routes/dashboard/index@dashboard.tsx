import { component$, useSignal } from '@builder.io/qwik';
import { supabase } from '~/supabase';
import { WelcomeSection } from '~/components/welcome-section/welcome-section';
import { UserStatsSection } from '~/components/user-stats-section/user-stats-section';
import { RecentProjectsSection } from '~/components/recent-projects-section/recent-projects-section';

export default component$(() => {
  const welcomeMessage = useSignal('Welcome to your Flashmark Tools Dashboard!');
  const userStats = useSignal({
    toolsUsed: 5,
    personasCreated: 10,
    totalHoursSaved: 25,
    remainingTokens: 100,
  });
  const recentProjects = useSignal([
    { name: 'Business A', date: '2023-06-01', personas: 4 },
    { name: 'Business B', date: '2023-06-15', personas: 8 },
    { name: 'Business C', date: '2023-06-30', personas: 12 },
  ]);

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
