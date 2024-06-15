import { component$ } from '@builder.io/qwik';
import { Persona } from '../../../../components/persona-container/persona-container2';
import { DashHeader } from '~/components/header/header';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';

export const usePersonas = routeLoader$(async (requestEvent) => {
  console.log('usePersonas success');

  const userId = '37706f5f-2c6c-438c-bc63-dafc2ba0c22d'; // Replace with actual user ID logic

  const url = new URL(requestEvent.url);
  const pathSegments = url.pathname.split('/');
  const id = pathSegments.filter(segment => segment !== '').pop(); // Extract the ID from the URL
  console.log('url:', url.pathname);
  
console.log('pathSegments:',pathSegments);
console.log('id:',id);
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

  if (!persona) {
    return <div>Loading...</div>; // You can customize this loading state as needed
  }

  return (
    <div class="flex flex-col h-full gap-4 flex-1 my-auto px-4 max-h-[95svh] overflow-auto">
      <DashHeader title="Flashmark.tools" showIconPrint={true} showIconHelp={true} />
      <div class="flex flex-col h-full self-stretch w-full rounded-lg asym-borders overflow-hidden">
        <div>
          <Persona
            title={persona.title || 'No title'}
            bio={persona.bio || 'No bio'}
            business={persona.business || 'No business'}
            name={persona.name || 'No name'}
            images={persona.images || []}
            summary={persona.summary || 'No summary'}
            age={persona.age || 0}
            gender={persona.gender || 'No gender'}
            ethnicity={persona.ethnicity || 'No ethnicity'}
            location={persona.location || 'No location'}
            occupation={persona.occupation || 'No occupation'}
            income_level={persona.income_level || 'No income level'}
            education_level={persona.education_level || 'No education level'}
            goals={persona.goals || 'No goals'}
            needs={persona.needs || 'No needs'}
            frustrations={persona.frustrations || 'No frustrations'}
            values_and_beliefs={persona.values_and_beliefs || 'No values & beliefs'}
            challenges={persona.challenges || 'No challenges'}
            behaviors={persona.behaviors || 'No behaviors'}
            other_brands={persona.other_brands || 'No other brands'}
            purchases={persona.purchases || 'No purchases'}
            lifestyle={persona.lifestyle || 'No lifestyle'}
            interests={persona.interests || 'No interests'}
            media_consumption={persona.media_consumption || 'No media consumption'}
            ditl={persona.ditl || 'No day in the life'}
            additional_insights={persona.additional_notes || 'No additional insights'}
          />
        </div>
      </div>
    </div>
  );
});
