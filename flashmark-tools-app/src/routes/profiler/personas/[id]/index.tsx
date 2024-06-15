import { component$ } from '@builder.io/qwik';
import { Persona } from '../../../../components/persona-container/persona-container2';
import { DashHeader } from '~/components/header/header';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';

export const usePersonas = routeLoader$(async (requestEvent) => {
  console.log('usePersonas success');
  const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic
  const id = 1018;

  const { data, error } = await supabase
    .from('profiler_personas')
    .select('*')
    .eq('user_id', userId)
    .eq('id', id)
    .single(); // Use .single() to fetch one record

  if (error) {
    return requestEvent.fail(500, { error: error.message });
  }

  return { persona: data };
});

export default component$(() => {
  const { value: { persona } } = usePersonas();

  return (
    <div class="flex flex-col h-full gap-4 flex-1 my-auto px-4 max-h-[95svh] overflow-auto">
      <DashHeader title="Flashmark.tools" showIconPrint={true} showIconHelp={true} />
      <div class="flex flex-col h-full self-stretch w-full rounded-lg asym-borders overflow-hidden">
        <div>
          <Persona
            title={persona.title}
            bio={persona.bio}
            business={persona.business}
            name={persona.name}
            images={persona.images || []}
            summary={persona.summary}
            age={persona.age}
            gender={persona.gender}
            ethnicity={persona.ethnicity}
            location={persona.location}
            occupation={persona.occupation}
            income_level={persona.income_level}
            education_level={persona.education_level}
            goals={persona.goals}
            needs={persona.needs}
            frustrations={persona.frustrations}
            values_and_beliefs={persona.values_and_beliefs}
            challenges={persona.challenges}
            behaviors={persona.behaviors}
            other_brands={persona.other_brands}
            purchases={persona.purchases}
            lifestyle={persona.lifestyle}
            interests={persona.interests}
            media_consumption={persona.media_consumption}
            ditl={persona.ditl}
            additional_insights={persona.additional_notes}
          />
        </div>
      </div>
    </div>
  );
});
