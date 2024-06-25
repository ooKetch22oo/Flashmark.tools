import { component$, Signal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface Project {
  name: string;
  date: string;
  personas: number;
}

interface RecentProjectsSectionProps {
  recentProjects: Signal<Project[]>;
}

export const RecentProjectsSection = component$<RecentProjectsSectionProps>(({ recentProjects }) => {
  return (
    <div class="box-border flex relative flex-col h-full gap-4 p-4 rounded-lg border-t-4 border-l-4 border-solid border-slate-950 border-b-[12px] border-r-[12px] flex-grow min-w-[20svw] max-sm:max-w-full">
      <h2 class="text-xl font-semibold mb-2">Recent Projects</h2>
      <div class="box-border rounded-lg border-t-4 border-l-4 border-solid border-slate-950 border-b-[12px] border-r-[12px]">
      <table class="w-full ">
        <thead class=" bg-slate-950 text-zinc-100">
          <tr>
            <th class="p-2 text-left">Name</th>
            <th class="text-left">Personas</th>
            <th class="p-2 text-right">Date</th>
          </tr>
        </thead>
        <tbody>
          {recentProjects.value.map((project, index) => (
            <tr key={index} class={index % 2 === 0 ? 'bg-zinc-100 hover:bg-cyan-600 cursor-pointer' : 'bg-zinc-300 hover:bg-cyan-600 cursor-pointer'}>
              <td class="p-2 text-left">{project.name}</td>
              <td class="text-left">{project.personas}</td>
              <td class="p-2 text-right">{project.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
});
