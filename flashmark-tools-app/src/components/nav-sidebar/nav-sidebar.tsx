import { component$} from "@builder.io/qwik";
import {Logo} from "../logo/logo";
import {Btn} from "../nav-btn/nav-btn";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
  const navigationItems = [
    { page: "/profiler", label: ".profiler" },
    { page: "/perception", label: ".perception" },
    { page: "/probe", label: ".probe" },
    { page: "/personality", label: ".personality" },
    { page: "/otherstuff", label: ".otherstuff" },
    // { page: "/account", label: ".account" },
  ];

  return (
    <nav class="flex flex-col my-auto ml-4 px-4 pt-4 pb-5 rounded-lg border-t-4 border-l-4 border-solid bg-zinc-100 border-b-[12px] border-r-[12px] border-slate-950 h-[95svh] min-w-[15rem]">
      <Link href="/dashboard" class="flex justify-center">
      <Logo />
      </Link>
      <div class="flex flex-col mt-4">
        {navigationItems.map((item, index) => (
          <Btn key={index} href={item.page} label={item.label} />
        ))}
      </div>
      <div class="flex flex-col mt-auto ">
        <Btn href="/account" label=".account" />
      </div>
    </nav>
  );
});