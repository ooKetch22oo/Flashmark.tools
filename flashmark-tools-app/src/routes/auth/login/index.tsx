import { component$ } from '@builder.io/qwik';
import { AuthForm } from '~/components/auth-form/auth-form';
import { RequestHandler } from '@builder.io/qwik-city';
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
    // Handle error (you might want to pass this to the component to display)
    return { success: false, error: error.message };
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

  return { success: false, error: 'Login failed' };
};

export default component$(() => {
  return (
    <div class="max-w-md mx-auto mt-8">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <AuthForm />
    </div>
  );
});
