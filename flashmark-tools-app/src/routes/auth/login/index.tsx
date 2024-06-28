import { component$, useSignal } from '@builder.io/qwik';
import { AuthForm } from '~/components/auth-form/auth-form';
import { RequestHandler, Form } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';

export const onPost: RequestHandler = async ({ request, cookie, redirect }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(JSON.stringify({ success: false, error: error.message }));
  }

  if (data.session) {
    cookie.set('sb-access-token', data.session.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });
    cookie.set('sb-refresh-token', data.session.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });

    throw redirect(302, '/dashboard');
  }

  throw new Error(JSON.stringify({ success: false, error: 'Login failed' }));
};

export default component$(() => {
  const errorSignal = useSignal('');

  return (
    <div class="max-w-md mx-auto mt-8">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <Form>
        <AuthForm />
        {errorSignal.value && (
          <div class="text-red-500 mt-2">{errorSignal.value}</div>
        )}
      </Form>
    </div>
  );
});
