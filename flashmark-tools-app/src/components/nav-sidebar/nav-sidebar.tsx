import { component$, qrl, QRL } from "@builder.io/qwik";
import {Logo} from "../logo/logo";
import {Btn} from "../btn/btn";

// interface NavItemProps {
//     label: string;
//     className: string;
// }

// const NavItem = component$<NavItemProps>(({ label, className }) => {
//     return (
//         <div className={`justify-center items-center px-8 py-3 mt-4 text-xl font-semibold leading-8 text-black whitespace-nowrap rounded-lg border-t-4 border-l-4 border-solid ${className} border-b-[12px] border-r-[12px]`}>
//             {label}
//         </div>
//     );
// });

// const Logo = component$(() => {
//   const logoSVG = `
//     <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M97.3391 0.399386C97.9771 0.730478 98.4707 1.24546 98.7395 1.86021C99.0082 2.47495 99.0362 3.15312 98.8187 3.78392L87.0793 37.9328H108.74C109.376 37.9325 109.999 38.0992 110.531 38.4121C111.063 38.7251 111.481 39.1707 111.733 39.6938C111.985 40.217 112.061 40.7949 111.951 41.3561C111.84 41.9173 111.549 42.4374 111.112 42.852L58.966 92.453C58.4614 92.9333 57.79 93.2465 57.0612 93.3415C56.3323 93.4364 55.589 93.3076 54.9525 92.976C54.3159 92.6443 53.8236 92.1294 53.5557 91.5152C53.2879 90.901 53.2604 90.2237 53.4776 89.5937L65.217 55.439H43.5568C42.9202 55.4392 42.2975 55.2726 41.7656 54.9596C41.2336 54.6466 40.8157 54.2011 40.5633 53.6779C40.311 53.1547 40.2353 52.5769 40.3456 52.0156C40.456 51.4544 40.7474 50.9344 41.1841 50.5197L93.3303 0.918737C93.8343 0.439062 94.5047 0.126105 95.2325 0.0307543C95.9603 -0.0645967 96.7027 0.0632653 97.3391 0.39355V0.399386Z" fill="#FFB429"/>
//       <path d="M88.2518 77.324C87.7901 77.7846 87.5343 78.3842 87.5343 79.0061V98.299C87.5343 99.6836 86.2923 100.805 84.7626 100.802L15.2883 100.66C13.7634 100.657 12.5291 99.5372 12.5291 98.157V35.39C12.5291 34.0077 13.7672 32.8871 15.2945 32.8871H45.9391C46.6631 32.8871 47.3583 32.63 47.8753 32.1712L55.0182 25.8315C56.7866 24.2619 55.5588 21.5414 53.082 21.5414H2.76543C1.23813 21.5414 0 22.662 0 24.0444V109.497C0 110.879 1.23813 112 2.76543 112H97.2979C98.8252 112 100.063 110.879 100.063 109.497V72.0266C100.063 69.7378 96.9495 68.6496 95.2501 70.3446L88.2518 77.324Z" fill="#FFB429"/>
//     </svg>
//   `;
//   return (
//     <div class="flex justify-center items-center self-center p-4 w-36 max-w-full rounded-lg border-t-4 border-l-4 border-solid border-b-[12px] border-r-[12px] border-slate-950">
//       <div class="box-border flex relative flex-col shrink-0" dangerouslySetInnerHTML={logoSVG}></div>
//     </div>
//   );
// });

export default component$(() => {
  const navigationItems = [
    { page: "/profiler", label: ".profiler" },
    { page: "/perception", label: ".perception" },
    { page: "/probe", label: ".probe" },
    { page: "/personality", label: ".personality" },
    { page: "/otherstuff", label: ".otherstuff" },
    { page: "/account", label: ".account" },
  ];
  
  return (
    <nav class="flex flex-col px-4 pt-4 pb-5 rounded-lg border-t-4 border-l-4 border-solid bg-zinc-100 border-b-[12px] border-r-[12px] border-slate-950 h-[90svh] max-w-[240px]">
      <Logo />
      <div class="flex flex-col">
        {navigationItems.map((item) => (
          <Btn href={item.page} label={item.label} />
        ))}
      </div>
    </nav>
  );
});