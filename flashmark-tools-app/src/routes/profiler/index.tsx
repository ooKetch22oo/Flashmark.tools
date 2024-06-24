import { component$ } from '@builder.io/qwik';
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

  // First, get all unique businesses for the user
  const { data: uniqueBusinesses, error: uniqueError } = await supabase
    .from('profiler_personas')
    .select('business')
    .eq('user_id', userId)
    .distinct();

  if (uniqueError) {
    return requestEvent.fail(500, { error: uniqueError.message });
  }

  // Now, fetch the latest data for each unique business
  const businessPromises = uniqueBusinesses.map(async (item) => {
    const { data, error } = await supabase
      .from('profiler_personas')
      .select('id, business, business_website, business_summary')
      .eq('user_id', userId)
      .eq('business', item.business)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error(`Error fetching data for business ${item.business}:`, error);
      return null;
    }

    return data;
  });

  const businessesData = await Promise.all(businessPromises);
  const validBusinesses = businessesData.filter((business): business is NonNullable<typeof business> => business !== null);

  console.log('uniqueBusinesses:', validBusinesses);
  return validBusinesses;
});

export default component$(() => {

const businesses = useDisplayBusinesses();

return (
  <div class='flex flex-col grow gap-4 overflow-auto'>
    <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full">
      <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">.profiler</h1>
    </header>
    <div class="flex flex-col pb-8 px-4 gap-4 grow row w-full rounded-lg overflow-auto max-h-[72svh]">
      {Array.isArray(businesses.value) ? businesses.value.map((business: any) => (
        // <Link class="flex" key={business.id} href={`/profiler/${business.business}/${business.id}`}>
        <BusinessCard
          key={business.id}
          business={business.business}
          business_website={business.business_website}
          business_summary={business.business_summary}
        />
        // </Link>
      )) : <div>No businesses found.</div>}
    </div>
  </div>
);
});
