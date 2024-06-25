import { component$, $, useSignal } from '@builder.io/qwik';

export interface AuthFormProps {
  onSubmit?: (email: string, password: string) => void;
}

export const AuthForm = component$<AuthFormProps>(({ onSubmit }) => {
  const email = useSignal('');
  const password = useSignal('');
  const error = useSignal('');

  const handleSubmit = $((event: Event) => {
    event.preventDefault();
    if (!email.value || !password.value) {
      error.value = 'Please enter both email and password.';
      return;
    }
    error.value = '';
    onSubmit?.(email.value, password.value);
  });

  return (
    <form onSubmit$={handleSubmit} class="space-y-4">
      {error.value && <p class="text-red-500">{error.value}</p>}
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@example.com"
          required
          onInput$={(event) => email.value = (event.target as HTMLInputElement).value}
        />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          onInput$={(event) => password.value = (event.target as HTMLInputElement).value}
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign In
      </button>
    </form>
  );
});
