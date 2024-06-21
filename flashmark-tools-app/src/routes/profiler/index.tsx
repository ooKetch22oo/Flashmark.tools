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
// console log success message
console.log('useDisplayBusinessess success');



const { data, error } = await supabase
  .from('profiler_personas')
  .select('id, business, business_website, business_summary')
  .eq('user_id', userId)



if (error) {
  return requestEvent.fail(500, { error: error.message });
}
console.log('data:', data);
return data;
});

export default component$(() => {

const businesses = useDisplayBusinesses();

return (
  <div class='flex flex-col grow gap-4 overflow-'>
    <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full ">
    <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">.profiler</h1>
    </header>
    <div class="flex flex-col pb-8 px-4 gap-4 grow row w-full rounded-lg overflow-auto max-h-[72svh]">
    {Array.isArray(businesses.value) ? businesses.value.map((businesses: any) => (

          // <Link class="flex" key={businesses.id} href={`/profiler/${business}/${businesses.id}`}>
           <BusinessCard
            key={businesses.id}
            business={businesses.business}
            website={businesses.business_website}
            summary={businesses.business_summary}
          />
            // /></Link>

      )) : <div>No businessess found.</div>}
    </div>
  </div>
);
});
