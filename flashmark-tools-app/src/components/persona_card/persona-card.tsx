import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

interface PersonaCardProps {
  name: string;
  title: string;
  quote: string;
  age: string;
  gender: string;
  ethnicity: string;
  goals: string;
  needs: string;
  frustrations: string;
  mainImageUrl: string;
  extraImageUrls: string[];
  id: string;
}

export const PersonaCard = component$((props: PersonaCardProps) => {
  const nav = useNavigate();
  return (
    <div
      onClick$={() => nav(`/persona/${props.id}`)}
      class="box-border flex relative flex-col shrink-0 gap-4 p-4 h-auto rounded-lg border-t-4 border-l-4 border-solid border-[black] border-b-[12px] border-r-[12px] grow-0 max-w-[45%] max-sm:max-w-full cursor-pointer"
    >
      <div class="box-border flex relative flex-col shrink-0 h-auto rounded-lg border-t-4 border-l-4 border-solid border-[black] border-b-[12px] border-r-[12px]">
        <img
          loading="lazy"
          src={props.mainImageUrl}
          class="box-border object-cover overflow-hidden shrink-0 w-full border-solid aspect-[0.67] min-h-[20px] min-w-[20px]"
        />
      </div>
      <div class="box-border flex relative flex-col shrink-0 pb-8 h-auto">
        <div class="box-border relative shrink-0 mt-5 h-auto text-3xl font-black text-slate-950">
          {props.name}
        </div>
        <div class="box-border relative shrink-0 h-auto font-bold text-slate-950">
          {props.title}
        </div>
        <div class="box-border relative shrink-0 h-auto font-medium text-slate-950">
          {props.quote}
        </div>
        <div class="box-border relative shrink-0 mt-4 h-auto text-xl font-extrabold">
          Demographics
        </div>
        <div class="box-border flex relative flex-row shrink-0 gap-2">
          <div class="box-border relative shrink-0 mt-0 h-auto font-bold">
            Age:
          </div>
          <div class="box-border relative shrink-0 mt-0 h-auto">{props.age}</div>
        </div>
        <div class="box-border flex relative flex-row shrink-0 gap-2">
          <div class="box-border relative shrink-0 mt-0 h-auto font-bold">
            Gender:
          </div>
          <div class="box-border relative shrink-0 mt-0 h-auto">
            {props.gender}
          </div>
        </div>
        <div class="box-border flex relative flex-row shrink-0 gap-2">
          <div class="box-border relative shrink-0 mt-0 h-auto font-bold">
            Ethnicity:
          </div>
          <div class="box-border relative shrink-0 mt-0 h-auto">
            {props.ethnicity}
          </div>
        </div>
        <div class="box-border relative shrink-0 mt-4 h-auto text-xl font-extrabold">
          Psychographics
        </div>
        <div class="box-border flex relative flex-row shrink-0 gap-2">
          <div class="box-border relative shrink-0 mt-0 h-auto font-bold">
            Goals:
          </div>
          <div class="box-border relative shrink-0 mt-0 h-auto">
            {props.goals}
          </div>
        </div>
        <div class="box-border flex relative flex-row shrink-0 gap-2">
          <div class="box-border relative shrink-0 mt-0 h-auto font-bold">
            Needs:
          </div>
          <div class="box-border relative shrink-0 mt-0 h-auto">
            {props.needs}
          </div>
        </div>
        <div class="box-border flex relative flex-row shrink-0 gap-2">
          <div class="box-border relative shrink-0 mt-0 h-auto font-bold">
            Frustrations:
          </div>
          <div class="box-border relative shrink-0 mt-0 h-auto">
            {props.frustrations}
          </div>
        </div>
      </div>
      <div class="box-border flex relative flex-row shrink-0 gap-1 justify-between items-center max-h-24">
        {props.extraImageUrls.map((url, index) => (
          <div
            key={index}
            class="box-border flex relative flex-col shrink-0 my-auto rounded-lg border-t-4 border-l-4 border-solid border-[black] border-b-[12px] border-r-[12px] min-w-[6rem] max-sm:min-w-[4.5rem]"
          >
            <img
              loading="lazy"
              src={url}
              class="box-border object-cover overflow-hidden shrink-0 aspect-square size-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
});