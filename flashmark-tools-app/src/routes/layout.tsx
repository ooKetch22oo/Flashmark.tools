import { component$, Slot } from '@builder.io/qwik';
import { Header } from '~/components/landing-header/landing-header';
import { Footer } from '~/components/footer/footer';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col bg-[]">
      <Header name='flashmark.tools' />
      <main class="flex-grow container mx-auto px-4 py-8">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "flashmark.tools - AI-Driven User Persona Generation",
  meta: [
    {
      name: "description",
      content: "Generate detailed user personas from any website with our AI-driven tool. Unlock deep customer insights in minutes.",
    },
  ],
};
