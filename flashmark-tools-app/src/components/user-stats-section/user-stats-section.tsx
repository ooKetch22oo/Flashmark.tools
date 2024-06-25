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
      <ul>
        <li>Tools Used: {userStats.value.toolsUsed}</li>
        <li>Projects Completed: {userStats.value.projectsCompleted}</li>
        <li>Total Hours Saved: {userStats.value.totalHoursSaved}</li>
      </ul>
    </div>
  );
});
