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
<div class="flex flex-col gap-4 justify-between self-stretch p-4 w-3/12 h-auto max-h-full rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 grow-0 max-w-[20%] min-w-[20%] max-md:grow max-md:w-full max-md:min-w-full max-md:max-w-full">      <div
        class="box-border flex relative flex-col shrink-0 h-3/5 rounded-lg border-t-4 border-l-4 border-solid bg-cover border-[black] border-b-[12px] border-r-[12px]"
        style={{ backgroundImage: `url(${state.mainImage})` }}
      ></div>
      <h2 class="text-base font-medium leading-8 text-slate-950">
        {props.title}
      </h2>
      <div class="text-base leading-7 text-slate-950">"{props.summary}"</div>
      <div class="flex justify-between h-20">
        {props.images.map((image, index) => (
          <div
            key={index}
            class="flex grow gap-1 justify-between self-stretch w-auto h-full max-h-20 bg-center bg-no-repeat bg-cover rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 max-w-[5rem]"
            style={{ backgroundImage: `url(${image})` }}
            onClick$={$(() => handleImageClick(image))}
          ></div>
        ))}
      </div>
    </div>
  );
});