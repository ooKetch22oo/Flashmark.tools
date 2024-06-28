import { component$, $, useSignal } from '@builder.io/qwik';
import { useLocation, useNavigate, Form } from '@builder.io/qwik-city';
import { supabase } from '../../supabase';

export const AuthForm = component$(() => {
  const email = useSignal('');
  const password = useSignal('');
  const confirmPassword = useSignal('');
  const error = useSignal('');
  const location = useLocation();
  const nav = useNavigate();

  const isSignUp = location.url.pathname.includes('sign-up');

  const handleSubmit = $(async (event: SubmitEvent) => {
    event.preventDefault();
    if (!email.value || !password.value) {
      error.value = 'Please enter both email and password.';
      return;
    }
    if (isSignUp && password.value !== confirmPassword.value) {
      error.value = 'Passwords do not match.';
      return;
    }
    error.value = '';

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        // Handle successful sign up
        nav('/dashboard');
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        // Handle successful login
        nav('/dashboard');
      }
    } catch (err: any) {
      error.value = err.message;
    }
  });

  return (
    <Form onSubmit$={handleSubmit} class="space-y-4">
      {error.value && <p class="text-red-500">{error.value}</p>}
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          id="email"
          name="email"
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
          name="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          onInput$={(event) => password.value = (event.target as HTMLInputElement).value}
        />
      </div>
      {isSignUp && (
        <div>
          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onInput$={(event) => confirmPassword.value = (event.target as HTMLInputElement).value}
          />
        </div>
      )}
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {isSignUp ? 'Sign Up' : 'Log In'}
      </button>
    </Form>
  );
});
