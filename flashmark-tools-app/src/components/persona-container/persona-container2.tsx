import { component$} from '@builder.io/qwik';
import { BackBtn } from "../back-btn/back-btn";
import { PersonaTitleCard } from "../persona-title-card/persona-title-card";
import { useLocation } from '@builder.io/qwik-city';
import { supabase } from '../../supabase';

type PropsType = {
  title: string;
  value: any;
};

interface PersonaContainerProps {
  business: string;
  name: string;
  images: string[];
  title: string;
  summary: string;
  age: number;
  gender: string;
  ethnicity: string;
  location: string;
  occupation: string;
  income_level: string;
  education_level: string;
  bio: string;
  values_and_beliefs: string;
  needs: string;
  goals: string;
  challenges: string;
  frustrations: string;
  behaviors: string;
  other_brands: string;
  purchases: string;
  lifestyle: string;
  interests: string;
  media_consumption: string;
  ditl: string;
  additional_insights: string;

}

const DemographicItem = component$(({ title, value }: PropsType) => (
  <div class="flex gap-2.5 mt-2 max-md:flex-wrap">
    <div class="font-semibold text-base">{title}:</div>
    <div class="flex-1 max-md:max-w-full text-base">{value}</div>
  </div>
));

const PsychographicItem = component$(({ title, value }: PropsType) => (
  <div class="flex flex-col gap-2.5 mt-2 max-md:flex-wrap">
    <div class="font-semibold text-base">{title}:</div>
    <div class="flex-1 max-md:max-w-full text-base">{value}</div>
  </div>
));

const PersonaDetails = component$(({ title, bio, background }: { title: string; bio: string ; background: string}) => (
  <div class="flex flex-col gap-1 justify-start self-stretch px-4 pt-2 pb-5 w-auto h-full max-h-1/2 overflow-auto rounded-lg asym-borders">
    <h2 class="text-base font-bold leading-8 max-md:max-w-full">{title}</h2>
    <div class="flex flex-col justify-start self-start w-auto">
      <div class={`justify-center px-2 py-1 mt-2 text-base font-medium leading-7 rounded-lg ${background}`}>{bio}</div>
    </div>
  </div>
));

export const Persona = component$(( props: PersonaContainerProps ) => {

  return (
    <div>
      <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full ">
        <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">
          {`${props.business ? `${props.business}:` : ''} Persona Profile - ${props.name }` || 'Loading...'}
        </h1>
        <BackBtn />
      </header>
      <section class="flex flex-col gap-4 justify-between px-4 pb-4 w-full max-md:max-w-full overflow-y-auto overflow-x-hidden h-[70.15svh]">
        <aside class="box-border flex relative pt-4 flex-row grow shrink-0 gap-4 w-auto">
          {props && (
            <>
              <PersonaTitleCard
                title={props.title}
                summary={props.summary}
                mainImage={props.images[0]}
                images={props.images}
              />
              <main class="box-border flex relative flex-row flex-wrap grow shrink-0 gap-4 justify-between self-stretch pr-4 w-full max-w-[80%] max-md:flex max-md:flex-col">
                <section class="box-border flex relative flex-row grow gap-4 justify-between items-stretch max-w-full max-md:flex max-md:flex-col">
                  <article class="box-border flex relative flex-col shrink-0 gap-4 justify-around self-stretch h-full w-6/12 min-w-[24rem] max-md:flex max-md:flex-row max-md:w-full max-md:max-w-full">
                    <PersonaDetails
                      title="Bio"
                      bio={props.bio}
                      background=""
                    />
                    <div class="flex flex-col justify-between self-stretch px-4 pt-2 pb-5 w-auto h-full max-h-1/2 rounded-lg asym-borders">
                      <h2 class="text-base font-bold leading-8 max-md:max-w-full">Demographics</h2>
                      <DemographicItem title="Age" value={props.age} />
                      <DemographicItem title="Gender" value={props.gender} />
                      <DemographicItem title="Ethnicity" value={props.ethnicity} />
                      <DemographicItem title="Location" value={props.location} />
                      <DemographicItem title="Occupation" value={props.occupation} />
                      <DemographicItem title="Income Level" value={props.income_level} />
                      <DemographicItem title="Education Level" value={props.education_level} />
                    </div>
                  </article>
                  <article class="flex flex-col gap-4 items-start self-stretch px-4 pt-4 pb-5 h-auto w-6/12 rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 overflow-auto">
                    <h2 class="self-start h-auto text-base font-bold leading-8 text-slate-950 max-md:max-w-full">Psychographics</h2>
                    <div class="box-border flex relative flex-row grow shrink-0 gap-4 self-start w-full">
                      <div class="flex flex-col justify-between self-start mr-auto h-full w-auto text-lg leading-7 grow-0 text-slate-950 max-md:mt-2">
                        <PsychographicItem title="Values & Beliefs" value={props.values_and_beliefs} />
                        <PsychographicItem title="Needs" value={props.needs} />
                        <PsychographicItem title="Goals" value={props.goals} />
                      </div>
                      <div class="flex flex-col justify-between self-start mr-auto h-full w-auto text-lg leading-7 grow-0 text-slate-950 max-md:mt-2">
                        <PsychographicItem title="Challenges" value={props.challenges} />
                        <PsychographicItem title="Frustrations" value={props.frustrations} />
                        <PsychographicItem title="Behaviors" value={props.behaviors} />
                      </div>
                    </div>
                  </article>
                </section>

              </main>
            </>
          )}
        </aside>
        <footer class="box-border flex relative flex-col shrink-0 w-full">
          <div class="flex flex-col gap-4 max-md:flex-col max-md:gap-0">
          <section class="box-border flex relative flex-row shrink-0 gap-4 w-full items-stretch">
                  <div class="flex flex-col grow justify-between p-4 w-8/12 text-lg leading-7 rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 text-slate-950 overflow-auto max-md:pr-5 max-md:mt-4 max-md:max-w-full">
                    <h2 class="text-base font-bold max-md:max-w-full">Habits</h2>
                    <DemographicItem title="Other Brands" value={props.other_brands} />
                    <DemographicItem title="Purchases" value={props.purchases} />
                    <DemographicItem title="Lifestyle" value={props.lifestyle} />
                    <DemographicItem title="Interests" value={props.interests} />
                    <DemographicItem title="Media Consumption" value={props.media_consumption} />
                  </div>
                  <div class="flex flex-col w-4/12 max-md:mt-4 ">
                  <PersonaDetails
                    title="Flashmark.insights"
                    bio={props.additional_insights}
                    background="bg-amber-400"
                  />
                  </div>
                </section>
            <section class="box-border flex relative flex-row shrink-0 gap-4 w-full">
            <div class="flex flex-col w-8/12 max-md:ml-0 max-md:w-full">
              <div class="box-border flex relative flex-col grow shrink-0 p-4 h-auto rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950">
                <article class="box-border flex relative flex-col shrink-0 w-full">
                  <h2 class="text-base font-bold leading-8 text-slate-950 max-md:max-w-full">Day in the life of {props.name ? props.name : '...'}</h2>
                  <p class="multi-columns">{props.ditl}</p>                  
                </article>
              </div>
            </div>
            <div class="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
              <div class="box-border flex relative flex-col grow shrink-0 rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 h-[200px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${props.images[2]})`}}></div>
            </div>
          </section>
          </div>
        </footer>
      </section>
    </div>
  );
});
