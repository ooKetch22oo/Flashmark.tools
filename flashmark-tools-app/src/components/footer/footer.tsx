import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Footer = component$(() => {
  return (
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 Flashmark.tools. All rights reserved.</p>
      <nav class="mt-2">
        <Link href="/about" class="text-blue-600 hover:underline mx-2">About</Link>
        <Link href="/contact" class="text-blue-600 hover:underline mx-2">Contact</Link>
      </nav>
    </footer>
  );
});
