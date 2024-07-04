import { component$, useComputed$ } from '@builder.io/qwik';
import { routeLoader$, RequestHandler } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';
import { WelcomeSection } from '~/components/welcome-section/welcome-section';
import { UserStatsSection } from '~/components/user-stats-section/user-stats-section';
import { RecentProjectsSection } from '~/components/recent-projects-section/recent-projects-section';

export interface Project {
  business: string;
  date: string;
  personas: number;
}

export interface UserStats {
  toolsUsed: number;
  personasCreated: number;
  totalHoursSaved: number;
  remainingTokens: any;
}

export const onRequest: RequestHandler = async ({ redirect, url, sharedMap }) => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    throw redirect(302, `/auth/login?redirectTo=${url.pathname}`);
  }
  // Store the user ID in the sharedMap for use in route loaders
  sharedMap.set('userId', session.user.id);
};

export const useUserStats = routeLoader$(async ({ sharedMap }) => {
  const userId = sharedMap.get('userId') as string;
  try {
    const { data: personasData, error: personasError } = await supabase
      .from('profiler_personas')
      .select('id')
      .eq('user_id', userId);

    if (personasError) {
      console.error('Error fetching personas:', personasError.message);
      return { personasCreated: 0, remainingTokens: 0 };
    }

    const personasCreated = personasData.length;

    const { data: userInfoData, error: userInfoError } = await supabase
      .from('user_info')
      .select('profiler_uses_remaining')
      .eq('id', userId)
      .single();

    if (userInfoError) {
      console.error('Error fetching user info:', userInfoError.message);
      return { personasCreated, remainingTokens: 0 };
    }

    return {
      personasCreated,
      remainingTokens: userInfoData.profiler_uses_remaining,
    };
  } catch (error) {
    console.error('Error in useUserStats:', error);
    return { personasCreated: 0, remainingTokens: 0 };
  }
});

export const useRecentProjects = routeLoader$<Project[]>(async ({ sharedMap }) => {
  const userId = sharedMap.get('userId') as string;
  try {
    const { data, error } = await supabase
      .from('profiler_personas')
      .select('business, created_time')
      .eq('user_id', userId)
      .order('created_time', { ascending: false });

    if (error) {
      console.error('Error fetching recent projects:', error.message);
      return [];
    }

    const businessMap = new Map<string, Project>();

    data.forEach(item => {
      if (!businessMap.has(item.business)) {
        businessMap.set(item.business, {
          business: item.business,
          date: new Date(item.created_time).toISOString().split('T')[0],
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
  } catch (error) {
    console.error('Error in useRecentProjects:', error);
    return [];
  }
});

export default component$(() => {
  const welcomeMessage = 'Welcome to your Flashmark Tools Dashboard!';
  const recentProjects = useRecentProjects();
  const userStats = useUserStats();
  const recentProjectsSignal = useComputed$(() => recentProjects.value);

  const computedUserStats = useComputed$(() => {
    const personasCreated = userStats.value.personasCreated;
    return {
      toolsUsed: Math.floor(personasCreated / 4),
      personasCreated: personasCreated,
      totalHoursSaved: (personasCreated / 4) * (2 * 4 - (8 / 60)),
      remainingTokens: userStats.value.remainingTokens,
    };
  });
  

  return (
    <div class="flex flex-col h-full">
      <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full">
        <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">Dashboard</h1>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grow overflow-auto">
        <WelcomeSection welcomeMessage={welcomeMessage} />
        <UserStatsSection userStats={computedUserStats} />
        <div class="col-span-1 md:col-span-2">
          <RecentProjectsSection recentProjects={recentProjectsSignal} />
        </div>
      </div>
    </div>
  );
});
