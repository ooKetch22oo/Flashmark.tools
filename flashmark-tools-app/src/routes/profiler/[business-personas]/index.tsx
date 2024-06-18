// src/routes/profiler/personas/index.tsx
import { component$ } from '@builder.io/qwik';
import { routeLoader$, Link} from '@builder.io/qwik-city';
import { supabase } from '~/supabase';
import { NavLink } from '~/components/nav-link/nav-link';
import { Btn } from '~/components/nav-btn/nav-btn';
import { PersonaCard } from '~/components/persona_card/persona-card';

const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic
const business = 'Avvance'; // Replace with actual business value logic


export const usePersonas = routeLoader$(async (requestEvent) => {
// console log success message
console.log('usePersonas success');



const { data, error } = await supabase
  .from('profiler_personas')
  .select('id, name, images, title, summary, age, gender, ethnicity, goals, needs, frustrations')
  .eq('user_id', userId)
  .eq('business', business);


if (error) {
  return requestEvent.fail(500, { error: error.message });
}
// console.log('data:', data);
return data;
});

export default component$(() => {
  const personas = usePersonas();

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
  <div class='flex flex-col gap-4 px-4 pt-2 pb-5'>
    <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">{business}</h1>
    <div class="flex flex-r h-full gap-4 self-stretch items-stretch w-full rounded-lg overflow-hidden">
    {Array.isArray(personas.value) ? personas.value.map((persona: any) => (

          <Link key={persona.id} href={`/profiler/${business}/${persona.id}`}>
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
            /></Link>

      )) : <div>No personas found.</div>}
    </div>
  </div>
);
});
