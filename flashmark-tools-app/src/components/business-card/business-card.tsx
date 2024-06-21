import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface BusinessCardProps {
  business: string;
  website: string;
  summary: string;
}

export const BusinessCard = component$<BusinessCardProps>(({ business, website, summary }) => {
  // const editedBusiness = business.replace(/- /g, '');

  return (
    <div class="box-border flex flex-col shrink-0 w-full rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950 ">
    <header class="box-border flex relative flex-row shrink-0 gap-1 items-center p-4 border-b-4 border-solid border-b-[black]">
        <div class="box-border flex relative flex-col shrink-0 gap-1">
        <Link href={`/profiler/${business}`}>
          <h2 class="box-border relative text-sm shrink-0 h-auto font-semibold">{business.replace(/- /g, '')}</h2>
    </Link>
          <a href={website} target="_blank" class="box-border relative shrink-0 h-auto">{website}</a>
        </div>
        <div class="box-border flex relative flex-col shrink-0 ml-auto w-6 h-6 bg-slate-950"></div>
      </header>
      <p class="box-border relative p-px h-auto bg-zinc-100 max-h-[150px] overflow-auto">{summary}</p>
    </div>
  );
});