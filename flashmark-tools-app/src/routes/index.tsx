import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Welcom to Flashmark.tools 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
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
