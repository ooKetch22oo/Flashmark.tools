import { component$ } from '@builder.io/qwik';
import { AuthForm } from '~/components/auth-form/auth-form';

export default component$(() => {
  return (
    <div class="max-w-md mx-auto mt-8">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <AuthForm />
    </div>
  );
});
