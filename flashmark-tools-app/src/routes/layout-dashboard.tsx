import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import NavSidebar from "../components/nav-sidebar/nav-sidebar";
import { DashHeader } from "~/components/header/header";
import { supabase } from "~/supabase";


export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};


export const onRequest: RequestHandler = async ({ next, redirect, url, cookie }) => {
  const accessToken = cookie.get('sb-access-token')?.value;
  const refreshToken = cookie.get('sb-refresh-token')?.value;

  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (error) {
      // Invalid session, clear cookies and redirect to login
      cookie.delete('sb-access-token', { path: '/', httpOnly: true, sameSite: 'strict' });
      cookie.delete('sb-refresh-token', { path: '/', httpOnly: true, sameSite: 'strict' });
      throw redirect(302, '/auth/login');
    }

    if (data.session) {
      // Valid session, update cookies and continue
      cookie.set('sb-access-token', data.session.access_token, { httpOnly: true, sameSite: 'strict' });
      cookie.set('sb-refresh-token', data.session.refresh_token, { httpOnly: true, sameSite: 'strict' });
      await next();
    } else {
      // No session, redirect to login
      throw redirect(302, '/auth/login');
    }
  } else if (!url.pathname.startsWith('/auth/')) {
    // No session and not on an auth page, redirect to login
    throw redirect(302, '/auth/login');
  } else {
    // On an auth page, allow access
    await next();
  }
};


export default component$(() => {



  return (
    <main>
      <div class='flex min-h-screen bg-green-400'>
        <NavSidebar />
        <div class="flex flex-col stretch flex-grow h-[95svh] gap-4 flex-1 my-auto px-4 max-h-[95svh] overflow-auto">
          <DashHeader title="flashmark.tools" showIconPrint={true} showIconHelp={true} />
          <div class="flex flex-col flex-grow h-full w-full rounded-lg asym-borders overflow-hidden">
            <Slot />
          </div>
        </div>
      </div>
    </main>
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
