import { component$, Slot } from '@builder.io/qwik';
import { Header } from '~/components/landing-header/landing-header';
import { Footer } from '~/components/footer/footer';

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
