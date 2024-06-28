import { RequestHandler } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';

export const onGet: RequestHandler = async ({ redirect, cookie }) => {
  // Sign out from Supabase
  await supabase.auth.signOut();

  // Clear the auth cookies
  cookie.delete('sb-access-token', { path: '/', sameSite: 'strict' });
  cookie.delete('sb-refresh-token', { path: '/', sameSite: 'strict' });

  // Redirect to the login page
  throw redirect(302, '/auth/login');
};
