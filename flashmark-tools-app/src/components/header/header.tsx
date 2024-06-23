import { component$, $ } from "@builder.io/qwik";

type DashHeaderProps = {
  title: string;
  showIconPrint?: boolean;
  showIconHelp?: boolean;
};

export const DashHeader = component$<DashHeaderProps>((props) => {
  const handleIconClick1 = $(() => {
    console.log(`Icon 1 clicked`);
  });

  const handleIconClick2 = $(() => {
    console.log(`Icon 2 clicked`);
  });

  return (
    <section class="flex gap-5 justify-between self-stretch pt-4 pr-5 pl-8 rounded-lg border-t-4 border-l-4 border-solid bg-zinc-100 border-b-[12px] border-r-[12px] border-slate-950">
      <h1 class="logo font-bold text-slate-950 max-md:max-w-full">{props.title}</h1>
      <div class="flex gap-4 justify-between self-start pt-2 px-4 mt-1">
        {props.showIconPrint && (
          <div
            class=" aspect-square w-[36px] cursor-pointer"
            onClick$={handleIconClick1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>
          </div>
        )}
        {props.showIconHelp && (
          <div
            class=" aspect-square w-[36px] cursor-pointer"
            onClick$={handleIconClick2}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-help"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
          </div>
        )}
      </div>
    </section>
  );
});