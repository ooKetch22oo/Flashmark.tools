import { component$, $, useSignal } from '@builder.io/qwik';

export const SignUpForm = component$(() => {
  const formSubmitted = useSignal(false);

  const handleSubmit = $((event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Here you would typically send the data to your backend
    console.log('Form data:', Object.fromEntries(formData));
    
    // For now, we'll just set formSubmitted to true
    formSubmitted.value = true;
  });

  return (
    <section class="h-[30svh] mb-12">
      <h3 class="text-2xl font-semibold mb-4">Sign Up for Updates</h3>
      {formSubmitted.value ? (
        <p class="text-green-600">Thank you for signing up!</p>
      ) : (
        <form class="flex flex-col items-start justify-start max-w-md" onSubmit$={handleSubmit}>
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
          <button type="submit" class="box-border items-center ml-auto mt-auto px-4 py-1 font-black flex bg-[var(--swatch--brand)] asym-borders hover:border-r-[.25rem] hover:border-b-[.25rem] cursor-pointer">Submit</button>
        </form>
      )}
    </section>
  );
});
