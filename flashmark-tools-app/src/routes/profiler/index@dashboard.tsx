import { component$, useSignal, useComputed$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { BusinessCard } from '~/components/business-card/business-card';
import { supabase } from '~/supabase';

interface Business {
  id: string;
  business: string;
  business_website: string;
  business_summary: string;
}

const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic

export const useDisplayBusinesses = routeLoader$(async ({ fail }) => {
  console.log('useDisplayBusinesses success');

  const { data, error } = await supabase
    .from('profiler_personas')
    .select('id, business, business_website, business_summary')
    .eq('user_id', userId);

  if (error) {
    return fail(500, { error: error.message });
  }

  // Process the data to get unique businesses
  const uniqueBusinesses = data.reduce((acc: Business[], current: Business) => {
    const x = acc.find((item) => item.business === current.business);
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
  const displayCount = useSignal(6);
  const searchTerm = useSignal('');

  const filteredBusinesses = useComputed$(() => {
    return (businesses.value as Business[] | undefined)?.filter((business) =>
      business.business.toLowerCase().includes(searchTerm.value.toLowerCase())
    ) ?? [];
  });

  return (
    <div class='flex flex-col grow overflow-auto'>
      <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full">
        <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">.profiler</h1>
        <input
          type="text"
          placeholder="Search businesses..."
          value={searchTerm.value}
          onInput$={(ev) => searchTerm.value = (ev.target as HTMLInputElement).value}
          class="px-4 py-2 box-border flex flex-col shrink-0 rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] bg-zinc-100 border-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>
      <div class="flex flex-wrap justify-around pt-4 pb-8 px-4 gap-4 grow row w-full rounded-lg overflow-auto max-h-[72svh]">
                {businesses.value 
            ? (filteredBusinesses.value.length > 0 
              ? filteredBusinesses.value.slice(0, displayCount.value).map((business: Business) => (
                  <BusinessCard
                    key={business.id}
                    business={business.business}
                    website={business.business_website}
                    summary={business.business_summary}
                  />
                )) 
              : <div>No businesses found.</div>)
            : <div>Loading...</div>
          }
        {filteredBusinesses.value.length > displayCount.value && (
          <button
          class="flex justify-center items-center h-16 px-8 py-3 mt-4 text-xl font-semibold leading-8 whitespace-nowrap rounded-lg border-t-4 border-l-4 border-solid  border-b-[12px] border-r-[12px] border-slate-950 bg-blue-500 hover:border-b-4 hover:border-r-4 hover:bg-blue-700 text-white "
          onClick$={() => displayCount.value += 6}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
});
