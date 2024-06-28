import { component$, Signal } from '@builder.io/qwik';

interface WelcomeSectionProps {
  welcomeMessage: string;
}

export const WelcomeSection = component$<WelcomeSectionProps>(({ welcomeMessage }) => {
  return (
    <div class="box-border flex relative flex-col h-full gap-4 p-4 rounded-lg border-t-4 border-l-4 border-solid border-[black] border-b-[12px] border-r-[12px] flex-grow min-w-[20svw] max-sm:max-w-full">
      <h2 class="text-xl font-semibold mb-2">Updates</h2>
      <p>{welcomeMessage}</p>
    </div>
  );
});
