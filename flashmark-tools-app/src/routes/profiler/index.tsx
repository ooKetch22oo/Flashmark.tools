import { component$ } from '@builder.io/qwik';
import { Btn } from '~/components/nav-btn/nav-btn';


export default component$(() => {
  return (
    <div>
      Profiler route works.
        <Btn href="/profiler/[business-personas]" label="Click me" />
    </div>
  );
});
