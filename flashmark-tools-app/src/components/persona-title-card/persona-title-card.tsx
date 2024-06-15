import { $, component$, useStore } from "@builder.io/qwik";

interface Props {
  title: string;
  summary: string;
  mainImage: string;
  images: string[];
}

interface State {
  mainImage: string;
  images: string[];
}

export const PersonaTitleCard = component$((props: Props) => {
  const state = useStore<State>({ mainImage: props.mainImage, images: [...props.images] });

  const handleImageClick = $((image: string) => {
    state.mainImage = image;
});

  return (
<div class="flex flex-col gap-4 justify-normal self-stretch p-4 w-3/12 h-auto max-h-full rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 grow-0 max-w-[20%] min-w-[20%] max-md:grow max-md:w-full max-md:min-w-full max-md:max-w-full">      
      <div
        class="box-border flex relative flex-col shrink-0 h-2/5 rounded-lg border-t-4 border-l-4 border-solid bg-cover border-[black] border-b-[12px] border-r-[12px]"
        style={{ backgroundImage: `url(${state.mainImage})` }}
      ></div>
      <h2 class="text-base font-medium leading-8 text-slate-950">
        {props.title}
      </h2>
      <div class="text-base leading-7 text-slate-950">"{props.summary}"</div>
      <div class="grid grid-cols-2 gap-4 mt-auto">
        {props.images.map((image, index) => (
          <div
            key={index}
            class="flex grow gap-1 justify-between self-stretch w-auto h-20 max-h-20 bg-center bg-no-repeat bg-cover rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 hover:border-b-[4px] hover:border-r-[4px] hover:bg-slate-300 cursor-pointer"
            style={{ backgroundImage: `url(${image})` }}
            onClick$={$(() => handleImageClick(image))}
          ></div>
        ))}
      </div>
    </div>
  );
});