import { component$ } from '@builder.io/qwik';

export const Testimonials = component$(() => {
  return (
    <section>
      <h3 class="text-2xl font-semibold mb-4">What Our Users Say</h3>
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-300 ease-in-out">
          <div class="w-full flex-shrink-0 p-4">
            <p class="italic">"This platform has revolutionized our workflow!"</p>
            <p class="font-semibold mt-2">- John Doe, CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
});
