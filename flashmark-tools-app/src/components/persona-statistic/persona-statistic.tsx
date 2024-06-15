import { component$ } from '@builder.io/qwik';

export interface StatisticProps {
  label: string;
  value: string;
}
export const Statistic = component$(({ label, value }: StatisticProps) => {
  return (
    <div class="flex gap-2.5 mt-2 max-md:flex-wrap">
      <div class="font-semibold">{label}:</div>
      <div class="flex-1 max-md:max-w-full">{value}</div>
    </div>
  );
});
