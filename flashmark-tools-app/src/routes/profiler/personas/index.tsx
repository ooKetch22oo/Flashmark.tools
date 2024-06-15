// src/routes/profiler/personas/index.tsx
import { component$ } from '@builder.io/qwik';
import { routeLoader$, Link} from '@builder.io/qwik-city';
import { supabase } from '~/supabase';
import { NavLink } from '~/components/nav-link/nav-link';
import { Btn } from '~/components/nav-btn/nav-btn';

export const usePersonas = routeLoader$(async (requestEvent) => {
// console log success message
console.log('usePersonas success');



const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic
const business = '- Sundown Gardens'; // Replace with actual business value logic
const { data, error } = await supabase
  .from('profiler_personas')
  .select('id, name, images, title, summary, age, gender, ethnicity, goals, needs, frustrations')
  .eq('user_id', userId)
  .eq('business', business);


if (error) {
  return requestEvent.fail(500, { error: error.message });
}
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
  <div>
    <h1>Personas List</h1>
    <div class='flex flex-col'>
      {Array.isArray(personas.value) ? personas.value.map((persona: any) => (

          <a key={persona.id} href={`/profiler/personas/${persona.id}`} class= 'text-lg'>{persona.name}</a>

      )) : <div>No personas found.</div>}
    </div>
  </div>
);
});
