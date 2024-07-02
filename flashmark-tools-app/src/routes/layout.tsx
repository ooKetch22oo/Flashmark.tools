import { component$, Slot } from '@builder.io/qwik';
import { Header } from '~/components/landing-header/landing-header';
import { Footer } from '~/components/footer/footer';
import { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';

export const onRequest: RequestHandler = async ({ next, redirect, url, cookie }) => {
  const accessToken = cookie.get('sb-access-token')?.value;
  const refreshToken = cookie.get('sb-refresh-token')?.value;

  // Allow access to main landing pages and auth routes without authentication
  if (url.pathname === '/' || url.pathname === '/landing' || url.pathname.startsWith('/auth/')) {
    return next();
  }

  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (error) {
      // Invalid session, clear cookies
      cookie.delete('sb-access-token', { path: '/', sameSite: 'strict' });
      cookie.delete('sb-refresh-token', { path: '/', sameSite: 'strict' });
    } else if (data.session) {
      // Valid session, update cookies
      cookie.set('sb-access-token', data.session.access_token, { sameSite: 'strict' });
      cookie.set('sb-refresh-token', data.session.refresh_token, { sameSite: 'strict' });
      return next();
    }
  }

  // Redirect to login if not authenticated and trying to access protected routes
  throw redirect(302, '/auth/login');
};

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col">
      <Header name='flashmark.tools' />
      <main class="flex flex-grow container mx-auto px-4 py-8">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "flashmark.tools - AI-Driven User Persona Generation",
  meta: [
    {
      name: "description",
      content: "Generate detailed user personas from any website with our AI-driven tool. Unlock deep customer insights in minutes.",
    },
  ],
};
