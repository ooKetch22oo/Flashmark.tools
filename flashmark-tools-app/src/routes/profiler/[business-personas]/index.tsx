// src/routes/profiler/personas/index.tsx
import { component$ } from '@builder.io/qwik';
import { routeLoader$, Link, useLocation} from '@builder.io/qwik-city';
import { supabase } from '~/supabase';
import { PersonaCard } from '~/components/persona_card/persona-card';

const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic
// const business = 'Avvance'; // Replace with actual business value logic


export const usePersonas = routeLoader$(async (requestEvent) => {
// console log success message
console.log('usePersonas success');

const url = new URL(requestEvent.url);
const pathSegments = url.pathname.split('/');
const businessUrl = pathSegments.filter(segment => segment !== '').pop(); // Extract the ID from the URL
const business = businessUrl ? businessUrl.replace(/%20/g, ' ') : '';
console.log('url:', url.pathname);
console.log(business)



const { data, error } = await supabase
  .from('profiler_personas')
  .select('id, name, images, title, summary, age, gender, ethnicity, goals, needs, frustrations, business')
  .eq('user_id', userId)
  .eq('business', business);


if (error) {
  return requestEvent.fail(500, { error: error.message });
}
console.log('data:', data);
return data;
});

export default component$(() => {
  const personas = usePersonas();
  const businessName = usePersonas()?.value?.[0]?.business || '';
  const business = businessName.replace(/- /g, '');
  if (personas && personas.value && personas.value.error) {
    return <div>Error: {personas.value.error}</div>;
  }
//console log each name in array personas and prevent if personas is undefined
  // if (personas && personas.value) {
  //   personas.value.forEach((persona: any) => {
  //     console.log(persona.name);
  //   });
  // }

return (
  <div class='flex flex-col grow gap-4 overflow-'>
    <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full ">
    <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">{business}</h1>
    </header>
    <div class="flex flex-row pb-4 px-4 gap-4 grow row w-full rounded-lg overflow-hidden">
    {Array.isArray(personas.value) ? personas.value.map((persona: any) => (

          // <Link class="flex" key={persona.id} href={`/profiler/${business}/${persona.id}`}>
            <PersonaCard 
            id={persona.id} 
            name={persona.name} 
            mainImage={persona.images[0]} 
            images={persona.images} 
            title={persona.title}
            quote={persona.summary} 
            age={persona.age}
            gender={persona.gender}
            ethnicity={persona.ethnicity}
            goals={persona.goals}
            needs={persona.needs}
            frustrations={persona.frustrations}
            business={persona.business}
            />
            // /></Link>

      )) : <div>No personas found.</div>}
    </div>
  </div>
);
});
