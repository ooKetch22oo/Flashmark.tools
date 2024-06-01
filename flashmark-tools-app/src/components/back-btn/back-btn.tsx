import { component$ } from '@builder.io/qwik';

export interface BackBtnProps {

}

export const BackBtn = component$<BackBtnProps>((props) => {
  return (
<div class="box-border flex h-[3.5rem] p-[4px] hover:p-[8px] text-[16px] leading-[24px] font-sans text-[--swatch--light] bg-[rgb(245,88,77)] border-t-[4px] border-l-[4px] border-b-[12px] border-r-[12px] border-solid border-[rgb(1,7,23)] antialiased transition-all ease-out duration-300 rounded-[8px] hover:border-b-[4px] hover:border-r-[4px]">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
          <path d="M7 17V7h10"></path>
          <path d="M17 17 7 7"></path>
        </svg>
      </div>
    </div>
  );
});
