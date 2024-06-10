import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DashHeader } from "~/components/header/header";


export default component$(() => {
  return (
    <div class="flex flex-col h-full gap-4 flex-1 my-auto px-4 max-h-[95svh] overflow-auto">
    <DashHeader title="Flashmark.tools" showIconPrint={false} showIconHelp={true} />
    <div class="flex flex-col h-full self-stretch w-full rounded-lg asym-borders overflow-hidden">
    <div>
      <h1>Welcom to Flashmark.tools 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </div>
    </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Flashmark.tools",
  meta: [
    {
      name: "description",
      content: "AI tools to do the Not Creative, Creative Stuff.",
    },
  ],
};
