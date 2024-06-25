import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col">
      {/* Header & Subheader */}
      <header class="bg-blue-600 text-white p-6">
        <h1 class="text-4xl font-bold">Welcome to Our Platform</h1>
        <h2 class="text-xl mt-2">Discover Amazing Features</h2>
      </header>

      {/* Main content */}
      <main class="flex-grow container mx-auto px-4 py-8">
        {/* Input form */}
        <section class="mb-12">
          <h3 class="text-2xl font-semibold mb-4">Sign Up for Updates</h3>
          <form class="max-w-md">
            <div class="mb-4">
              <label for="firstName" class="block mb-2">First Name</label>
              <input type="text" id="firstName" name="firstName" class="w-full p-2 border rounded" required />
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2">Email</label>
              <input type="email" id="email" name="email" class="w-full p-2 border rounded" required />
            </div>
            <div class="mb-4">
              <label class="flex items-center">
                <input type="checkbox" name="optIn" class="mr-2" />
                <span>Opt-in to receive email updates</span>
              </label>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
          </form>
        </section>

        {/* Social proof carousel */}
        <section>
          <h3 class="text-2xl font-semibold mb-4">What Our Users Say</h3>
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-300 ease-in-out">
              {/* Add multiple testimonials here */}
              <div class="w-full flex-shrink-0 p-4">
                <p class="italic">"This platform has revolutionized our workflow!"</p>
                <p class="font-semibold mt-2">- John Doe, CEO</p>
              </div>
              {/* Add more testimonials as needed */}
            </div>
          </div>
        </section>

        {/* Slot for additional content */}
        <Slot />
      </main>

      {/* Footer */}
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 Our Platform. All rights reserved.</p>
        <nav class="mt-2">
          <Link href="/about" class="text-blue-600 hover:underline mx-2">About</Link>
          <Link href="/contact" class="text-blue-600 hover:underline mx-2">Contact</Link>
        </nav>
      </footer>
    </div>
  );
});
