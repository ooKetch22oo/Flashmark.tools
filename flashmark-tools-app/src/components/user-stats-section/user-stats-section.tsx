import { component$, Signal } from '@builder.io/qwik';

interface UserStats {
  toolsUsed: number;
  projectsCompleted: number;
  totalHoursSaved: number;
}

interface UserStatsSectionProps {
  userStats: Signal<UserStats>;
}

export const UserStatsSection = component$<UserStatsSectionProps>(({ userStats }) => {
  return (
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-semibold mb-2">Your Statistics</h2>
      <dl>
        <dt>Tools Used:</dt>
        <dd>{userStats.value.toolsUsed}</dd>
        <dt>Projects Completed:</dt>
        <dd>{userStats.value.projectsCompleted}</dd>
        <dt>Total Hours Saved:</dt>
        <dd>{userStats.value.totalHoursSaved}</dd>
      </dl>
    </div>
  );
});
