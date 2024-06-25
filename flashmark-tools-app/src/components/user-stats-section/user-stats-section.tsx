import { component$, Signal } from '@builder.io/qwik';

interface UserStats {
  toolsUsed: number;
  personasCreated: number;
  totalHoursSaved: number;
  remainingTokens: number;
}

interface UserStatsSectionProps {
  userStats: Signal<UserStats>;
}

const UserStat = component$<{ label: string; value: number }>(({ label, value }) => {
  return (
    <div>
      <dt>{label}:</dt>
      <dd>{value}</dd>
    </div>
  );
} );

export const UserStatsSection = component$<UserStatsSectionProps>(({ userStats }) => {
  return (
    <div class="box-border flex relative flex-col h-full gap-4 p-4 rounded-lg border-t-4 border-l-4 border-solid border-[black] border-b-[12px] border-r-[12px] flex-grow max-sm:max-w-full">
      <h2 class="text-xl font-semibold mb-2">Your Statistics</h2>
      <div class="grid grid-cols-3 gap-4">
        <UserStat label="Tools Used" value={userStats.value.toolsUsed} />
        <UserStat label="Personas Created" value={userStats.value.personasCreated} />
        <UserStat label="Total Hours Saved" value={userStats.value.totalHoursSaved} />
        <UserStat label="Remaining Tokens" value={userStats.value.remainingTokens} />
      </div>
    </div>
  );
});
