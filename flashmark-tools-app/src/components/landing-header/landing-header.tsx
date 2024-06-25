import { component$ } from '@builder.io/qwik';
import { Logo } from '../logo/logo';

export const Header = component$(() => {
  return (
    <header class="bg-blue-600 text-white p-6 flex items-center">
      <Logo />
      <span class="text-3xl font-bold ml-4">flashmark.tools</span>
    </header>
  );
});
