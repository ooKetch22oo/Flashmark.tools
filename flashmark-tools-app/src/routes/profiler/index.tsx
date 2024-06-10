import { component$ } from '@builder.io/qwik';
import { Persona } from '../../components/personas-container/persona-container';
import { DashHeader } from '~/components/header/header';

export default component$(() => {
  return (
    <div class="flex flex-col h-full gap-4 flex-1 my-auto px-4 max-h-[95svh] overflow-auto">
    <DashHeader title="Flashmark.tools" showIconPrint={true} showIconHelp={true} />
    <div class="flex flex-col h-full self-stretch w-full rounded-lg asym-borders overflow-hidden">
    <div>
      <Persona/>
    </div>
    </div>
    </div>
  );
});
