import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import NavSidebar from "../components/nav-sidebar/nav-sidebar";
import { DashHeader } from "~/components/header/header";

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


export default component$(() => {



  return (
  <main>
    <div class= 'flex min-h-screen bg-green-400'>
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