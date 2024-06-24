import { component$, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { BusinessCard } from '~/components/business-card/business-card';
import { supabase } from '~/supabase';

// businesses: {
//   business: string;
//   website: string;
//   summary: string;
// }[];


const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic


export const useDisplayBusinesses = routeLoader$(async (requestEvent) => {
  console.log('useDisplayBusinesses success');

  const { data, error } = await supabase
    .from('profiler_personas')
    .select('id, business, business_website, business_summary')
    .eq('user_id', userId);

  if (error) {
    return requestEvent.fail(500, { error: error.message });
  }

  // Process the data to get unique businesses
  const uniqueBusinesses = data.reduce((acc: any[], current: any) => {
    const x = acc.find((item: any) => item.business === current.business);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  console.log('uniqueBusinesses:', uniqueBusinesses);
  return uniqueBusinesses;
});

export default component$(() => {
  const businesses = useDisplayBusinesses();
  const displayCount = useSignal(5);

  return (
    <div class='flex flex-col grow overflow-auto'>
      <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full">
        <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">.profiler</h1>
      </header>
      <div class="flex flex-col pt-4 pb-8 px-4 gap-4 grow row w-full rounded-lg overflow-auto max-h-[72svh]">
        {Array.isArray(businesses.value) ? 
          businesses.value.slice(0, displayCount.value).map((business: any) => (
            // <Link class="flex" key={business.id} href={`/profiler/${business.business}/${business.id}`}>
            <BusinessCard
              key={business.id}
              business={business.business}
              website={business.business_website}
              summary={business.business_summary}
            />
            // </Link>
          )) 
        : <div>No businesses found.</div>}
        {businesses.value && (businesses.value.length ?? 0) > displayCount.value && (
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick$={() => displayCount.value += 5}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
});
