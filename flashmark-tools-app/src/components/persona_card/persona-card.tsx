import { $, component$, useStore } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';

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
  mainImage: string;
  images: string[];
  id: string;
  business: string;
}

interface State {
  mainImage: string;
  previousImage: string;
  images: string[];
  transitioning: boolean;
}

interface PropsType {
  title: string;
  value: string;
}

const DemographicItem = component$(({ title, value }: PropsType) => (
  <div class="flex gap-2.5 mt-1 max-md:flex-wrap">
    <div class="font-semibold text-base">{title}:</div>
    <div class="flex-1 max-md:max-w-full text-base">{value}</div>
  </div>
));

const PsychographicItem = component$(({ title, value }: PropsType) => (
  <div class="flex flex-col gap-2.5 mt-1 max-md:flex-wrap">
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

export const PersonaCard = component$((props: PersonaCardProps) => {
  const nav = useNavigate();
  const business = props.business;
  const id = props.id;
  const state = useStore<State>({ 
    mainImage: props.mainImage, 
    previousImage: props.mainImage,
    images: [...props.images],
    transitioning: false 
  });

  const handleImageClick = $((image: string) => {
    if (state.mainImage !== image) {
      state.transitioning = true;
      state.previousImage = state.mainImage;
      state.mainImage = image; // Update mainImage immediately
      setTimeout(() => {
        state.transitioning = false;
      }, 500); // Match this duration with the CSS animation duration
    }
  });

  return (
    <div
      // onClick$={() => nav(`/persona/${props.id}`)}
      class="box-border flex relative flex-col h-auto gap-4 p-4 rounded-lg border-t-4 border-l-4 border-solid border-[black] border-b-[12px] border-r-[12px] flex-grow min-w-[20svw] max-sm:max-w-full">
      <div class=" box-border flex relative flex-col h-56 rounded-lg border-t-4 border-l-4 border-solid bg-cover border-[black] border-b-[12px] border-r-[12px] overflow-hidden">
          <div class="image-container">
          <img
            width="1024"
            height="1024"
            src={state.previousImage}
            alt="Previous"
            class={`${state.transitioning ? '' : 'hidden'}`} // Hide previous image when not transitioning
          />
          <img
            width="1024"
            height="1024"
            src={state.mainImage}
            alt="Main"
            class={`${state.transitioning ? 'fade-up' : ''}`}
          />
          </div>
      </div>
      <div class="flex flex-row justify-between ">
        <div class="box-border relative shrink-0 mt-1 h-auto text-3xl font-black text-slate-950">
          {props.name}
        </div>
      <Link href={`/profiler/${business}/${id}`} class="box-border items-center px-4 py-1 font-black flex bg-[var(--swatch--brand)] asym-borders cursor-pointer">
          View Persona
      </Link>
      </div>
      <div class="box-border flex relative flex-col shrink pb-8 h-auto max-h-52 overflow-auto">
        <div class="box-border relative shrink-0 h-auto font-bold text-slate-950">
          {props.title}
        </div>
        <div class="box-border relative shrink-0 h-auto font-medium text-slate-950">
          {props.quote}
        </div>
        <div class="box-border relative shrink-0 mt-2 h-auto text-xl font-extrabold">
          Demographics
        </div>
        <DemographicItem title="Age" value={props.age} />
        <DemographicItem title="Gender" value={props.gender} />
        <DemographicItem title="Ethnicity" value={props.ethnicity} />
        <div class="box-border relative shrink-0 mt-2 h-auto text-xl font-extrabold">
          Psychographics
        </div>
        <PsychographicItem title="Goals" value={props.goals} />
        <PsychographicItem title="Needs" value={props.needs} />
        <PsychographicItem title="Frustrations" value={props.frustrations} />
      </div>
      <div class="grid grid-cols-4 gap-4 mt-auto">
        {props.images.map((image, index) => (
          <img
            key={index}
            width="1024"
            height="1024"
            src={image}
            alt={`Thumbnail ${index}`}
            class="w-full h-auto object-cover rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 hover:border-b-[4px] hover:border-r-[4px] hover:bg-slate-300 cursor-pointer"
            onClick$={$(() => handleImageClick(image))}
          />
        ))}
      </div>
    </div>
  );
});
