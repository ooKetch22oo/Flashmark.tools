import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface BtnProps {
  href: string;
  label: string;
}

export const Btn = component$<BtnProps>((props) => {
  return (
    <Link
      href={props.href}
      class="flex justify-center items-center px-8 py-3 mt-4 text-xl font-semibold leading-8 text-black whitespace-nowrap rounded-lg border-t-4 border-l-4 border-solid bg-zinc-100 border-b-[12px] border-r-[12px] border-slate-950 hover:bg-slate-300 hover:border-b-[4px] hover:border-r-[4px]"
      style={{
        transition: "all 0.2s",
        height: "4rem",}}
>
      {props.label}
    </Link>
  
  );
});
