import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { BtnSm } from '../btn-sm/btn-sm';

export interface BusinessCardProps {
  business: string;
  website: string;
  summary: string;
}

export const BusinessCard = component$<BusinessCardProps>(({ business, website, summary }) => {
  // const editedBusiness = business.replace(/- /g, '');

  return (
    <div class="box-border flex flex-col shrink-0 w-[48%] max-h-60 rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 ">
    <header class="box-border flex relative flex-row justify-between shrink-0 gap-1 items-center p-4 border-b-4 border-solid border-b-slate-950">
        <div class="box-border flex relative flex-col shrink-0 gap-1">
          <h2 class="box-border relative text-sm shrink-0 h-auto font-semibold">{business.replace(/- /g, '')}</h2>
          <a href={website} target="_blank" class="box-border relative shrink-0 h-auto">{website}</a>
        </div>
        {/* <Link href={`/profiler/${business}`} class="box-border items-center px-4 py-1 font-black flex bg-[var(--swatch--brand)] asym-borders hover:border-r-[.25rem] hover:border-b-[.25rem] cursor-pointer">
          View Persona
      </Link>       */}
      <BtnSm label="View Persona" href={`/profiler/${business}`} />
      </header>
      <p class="box-border relative px-4 py-1 h-auto bg-zinc-100 max-h-[150px] overflow-auto">{summary}</p>
    </div>
  );
});