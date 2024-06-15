import { component$, useStore, useTask$ } from '@builder.io/qwik';
import { BackBtn } from "../back-btn/back-btn";
import { PersonaTitleCard } from "../persona-title-card/persona-title-card";
import { useLocation } from '@builder.io/qwik-city';
import { supabase } from '../../supabase';

type PropsType = {
  title: string;
  value: string;
};



const DemographicItem = component$(({ title, value }: PropsType) => (
  <div class="flex gap-2.5 mt-2 max-md:flex-wrap">
    <div class="font-semibold text-base">{title}:</div>
    <div class="flex-1 max-md:max-w-full text-base">{value}</div>
  </div>
));

const PersonaDetails = component$(({ title, bio, background }: { title: string; bio: string ; background: string}) => (
  <div class="flex flex-col gap-1 justify-start self-stretch px-4 pt-2 pb-5 w-auto h-full max-h-[16rem] overflow-auto rounded-lg asym-borders">
    <h2 class="text-base font-bold leading-8 max-md:max-w-full">{title}</h2>
    <div class="flex flex-col justify-start self-start w-auto">
<div class={`justify-center px-2 py-1 mt-2 text-base font-medium leading-7 rounded-lg ${background}`}>{bio}</div>    </div>
  </div>
));

export const Persona = component$(() => {


  return (
    <div>
      <header class="flex gap-5 justify-between py-4 pr-5 pl-4 w-full border-b-4 border-black border-solid max-md:flex-wrap max-md:max-w-full ">
        <h1 class="my-auto text-3xl font-semibold leading-10 text-slate-950">Persona Name</h1>
        <BackBtn />
      </header>
      <section class="flex flex-col gap-4 justify-between px-4 pb-4 w-full max-md:max-w-full overflow-y-auto overflow-x-hidden h-[70.15svh]">
        <aside class="box-border flex relative pt-4 flex-row grow shrink-0 gap-4 w-auto">
          <PersonaTitleCard
            title="Title"
            summary="Quote about the user persona."
            mainImage="https://images.pexels.com/photos/24613542/pexels-photo-24613542.jpeg?auto=compress&cs=tinysrgb&h=350"
            images={["https://images.pexels.com/photos/24988214/pexels-photo-24988214.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/25007817/pexels-photo-25007817.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/24836833/pexels-photo-24836833.jpeg?auto=compress&cs=tinysrgb&h=350"]}
          />
          <main class="box-border flex relative flex-row flex-wrap grow shrink-0 gap-4 justify-between self-stretch pr-4 w-full max-w-[80%] max-md:flex max-md:flex-col">
            <section class="box-border flex relative flex-row grow gap-4 justify-start max-w-full max-md:flex max-md:flex-col">
              <article class="box-border flex relative flex-col shrink-0 gap-4 justify-around self-stretch h-full min-w-[24rem] max-w-[40%] max-md:flex max-md:flex-row max-md:w-full max-md:max-w-full">
                <PersonaDetails
                  title="Bio"
                  bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  background=""
                />
                <div class="flex flex-col gap-0 justify-between self-stretch px-4 pt-2 pb-5 w-auto h-full max-h-1/2 rounded-lg asym-borders">
                  <h2 class="text-base font-bold leading-8 max-md:max-w-full">Demographics</h2>
                  <DemographicItem title="Age" value="" />
                  <DemographicItem title="Gender" value="" />
                  <DemographicItem title="Ethnicity" value="" />
                  <DemographicItem title="Location" value="" />
                  <DemographicItem title="Occupation" value="" />
                  <DemographicItem title="Income Level" value="" />
                  <DemographicItem title="Education Level" value="" />
                </div>
              </article>
              <article class="flex flex-col gap-4 items-start self-stretch px-4 pt-4 pb-5 h-auto w-full rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950">
                <h2 class="self-start h-auto text-base font-bold leading-8 text-slate-950 max-md:max-w-full">Psychographics</h2>
                <div class="box-border flex relative flex-row grow shrink-0 gap-4 self-start w-full">
                  <div class="flex flex-col justify-between self-start mr-auto h-full w-auto text-lg leading-7 grow-0 text-slate-950 max-md:mt-2">
                      <DemographicItem title="Values & Beliefs" value="" />
                      <DemographicItem title="Needs" value="" />
                      <DemographicItem title="Goals" value="" />
                  </div>
                  <div class="flex flex-col justify-between self-start mr-auto h-full w-auto text-lg leading-7 grow-0 text-slate-950 max-md:mt-2">
                      <DemographicItem title="Challenges" value="" />
                      <DemographicItem title="Frustrations" value="" />
                      <DemographicItem title="Behaviors" value="" />
                  </div>
                </div>
              </article>
            </section>
            <section class="box-border flex relative flex-row shrink-0 gap-4 w-full">
              <div class="flex flex-col grow justify-between p-4 w-6/12 text-lg leading-7 rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 text-slate-950 max-md:pr-5 max-md:mt-4 max-md:max-w-full">
                <h2 class="text-base font-bold max-md:max-w-full">Habits</h2>
                <DemographicItem title="Other Brands" value="" />
                <DemographicItem title="Purchases" value="" />
                <DemographicItem title="Lifestyle" value="" />
                <DemographicItem title="Interests" value="" />
                <DemographicItem title="Media Consumption:" value="" />
              </div>
              <PersonaDetails
                  title="Flashmark.insights"
                  bio="Extra little insights into the mind of the user persona goes here."
                  background="bg-amber-400"
                />
            </section>
          </main>
        </aside>
            <footer class="box-border flex relative flex-col shrink-0 w-full">
              <div class="flex gap-4 max-md:flex-col max-md:gap-0">
                <section class="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                  <div class="box-border flex relative flex-col grow shrink-0 p-4 h-auto rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950">
                    <article class="box-border flex relative flex-col shrink-0 w-full">
                      <h2 class="text-base font-bold leading-8 text-slate-950 max-md:max-w-full">Day in the life of {"record.name"}</h2>
                      <p class="multi-columns">Enter some text...Please note that the text will flow from top to bottom in each column before moving on to the next column. Also, the columns will be balanced, which means they will have roughly the same amount of content.</p>                  
                    </article>
                  </div>
                </section>
                <section class="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <div class="box-border flex relative flex-col grow shrink-0 rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 h-[200px]"></div>
                </section>
              </div>
            </footer>
      </section>
    </div>
  );
});