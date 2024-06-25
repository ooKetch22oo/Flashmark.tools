import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SignUpForm } from "~/components/email-sign-up-form/email-sign-up-form";
import { Testimonials } from "~/components/testimonials/testimonials";

export default component$(() => {
  return (
    <div>
      <h1 class="text-3xl font-bold mb-6">Welcome to Flashmark.tools 👋</h1>
      <p class="mb-8">AI tools to do the "Not Creative, Creative Stuff."</p>
      <SignUpForm />
      <Testimonials />
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
