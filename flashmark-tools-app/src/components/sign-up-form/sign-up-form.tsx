import { component$ } from '@builder.io/qwik';

export const SignUpForm = component$(() => {
  return (
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
  );
});
