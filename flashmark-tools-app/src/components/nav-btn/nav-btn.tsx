import { component$ } from '@builder.io/qwik';
import { NavLink } from '../nav-link/nav-link';

export interface BtnProps {
  href: string;
  label: string;
}

export const Btn = component$<BtnProps>((props) => {
  return (
    <NavLink
      href={props.href}
      activeClass="!bg-slate-950 !border-b-[4px] !border-r-[4px] !text-zinc-100"
      class="flex justify-center items-center h-16 px-8 py-3 mt-4 text-xl font-semibold leading-8 text-slate-950 whitespace-nowrap rounded-lg border-t-4 border-l-4 border-solid bg-zinc-100 border-b-[12px] border-r-[12px] border-slate-950 hover:bg-slate-300 hover:border-b-[4px] hover:border-r-[4px]"
    >
      {props.label}
    </NavLink>
  );
});