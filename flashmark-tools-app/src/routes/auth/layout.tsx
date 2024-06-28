import { component$, Slot } from '@builder.io/qwik';
import { RequestHandler } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';

export const onRequest: RequestHandler = async ({ next, redirect, url, cookie }) => {
  const accessToken = cookie.get('sb-access-token');
  const refreshToken = cookie.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    // No tokens found, user is not authenticated
    if (!url.pathname.startsWith('/auth')) {
      throw redirect(302, '/auth/login');
    }
  } else {
    // Verify the token
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value,
    });

    if (error) {
      // Token is invalid or expired
      cookie.delete('sb-access-token', { path: '/', httpOnly: true, sameSite: 'strict' });
      cookie.delete('sb-refresh-token', { path: '/', httpOnly: true, sameSite: 'strict' });
      if (!url.pathname.startsWith('/auth')) {
        throw redirect(302, '/auth/login');
      }
    } else if (data.session) {
      // Token is valid, update it in the cookie
      cookie.set('sb-access-token', data.session.access_token, { httpOnly: true, sameSite: 'strict' });
      cookie.set('sb-refresh-token', data.session.refresh_token, { httpOnly: true, sameSite: 'strict' });
      
      // If user is authenticated and trying to access auth pages, redirect to dashboard
      if (url.pathname.startsWith('/auth')) {
        throw redirect(302, '/dashboard');
      }
    }
  }

  await next();
};

export default component$(() => {
  return (
    <section class="auth-layout">
      <Slot />
    </section>
  );
});
