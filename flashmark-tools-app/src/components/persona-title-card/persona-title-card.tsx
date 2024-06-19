import { $, component$, useStore } from "@builder.io/qwik";

interface Props {
  title: string;
  summary: string;
  mainImage: string;
  images: string[];
}

interface State {
  mainImage: string;
  previousImage: string;
  images: string[];
  transitioning: boolean;
}

export const PersonaTitleCard = component$((props: Props) => {
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
    <div class="flex flex-col gap-4 justify-normal self-stretch p-4 w-3/12 min-h-[70svh] rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 overflow-hidden">
      <div class="box-border flex relative flex-col shrink-0 h-2/5 rounded-lg border-t-4 border-l-4 border-solid bg-cover border-[black] border-b-[12px] border-r-[12px] overflow-hidden">
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
      <h2 class="text-base font-medium leading-8 text-slate-950">
        {props.title}
      </h2>
      <div class="text-base leading-7 text-slate-950">"{props.summary}"</div>
      <div class="grid grid-cols-2 gap-4 mt-auto">
        {props.images.map((image, index) => (
          <img
            key={index}
            width="1024"
            height="1024"
            src={image}
            alt={`Thumbnail ${index}`}
            class="w-full h-20 object-cover rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 hover:border-b-[4px] hover:border-r-[4px] hover:bg-slate-300 cursor-pointer"
            onClick$={$(() => handleImageClick(image))}
          />
        ))}
      </div>
    </div>
  );
});
