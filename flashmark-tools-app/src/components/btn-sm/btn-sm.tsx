import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface BtnSmProps {
  label: string;
  href: string;
}

export const BtnSm = component$<BtnSmProps>((props) => {
  return (
    <div class="flex flex-col mb-auto">
      <Link href={props.href} class="box-border items-center ml-auto mt-auto px-4 py-1 font-black flex bg-[var(--swatch--brand)] asym-borders hover:border-r-[.25rem] hover:border-b-[.25rem] cursor-pointer">
        {props.label}
      </Link>
    </div>
  );
} );
