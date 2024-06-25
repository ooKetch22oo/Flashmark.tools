import { component$ } from '@builder.io/qwik';
import { useSignal } from '@builder.io/qwik';

export default component$(() => {
  const welcomeMessage = useSignal('Welcome to your Flashmark Tools Dashboard!');
  const userStats = useSignal({
    toolsUsed: 5,
    projectsCompleted: 10,
    totalHoursSaved: 25
  });
  const recentProjects = useSignal([
    { name: 'Project A', date: '2023-06-01', status: 'Completed' },
    { name: 'Project B', date: '2023-06-15', status: 'In Progress' },
    { name: 'Project C', date: '2023-06-30', status: 'Planned' },
  ]);

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
      <div class="flex mb-6">
        {/* Welcome/News Section */}
        <div class="w-1/2 pr-2">
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-xl font-semibold mb-2">Updates</h2>
            <p>{welcomeMessage.value}</p>
          </div>
        </div>
        {/* User Stats Section */}
        <div class="w-1/2 pl-2">
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-xl font-semibold mb-2">Your Statistics</h2>
            <ul>
              <li>Tools Used: {userStats.value.toolsUsed}</li>
              <li>Projects Completed: {userStats.value.projectsCompleted}</li>
              <li>Total Hours Saved: {userStats.value.totalHoursSaved}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Recent Projects Section */}
      <div class="w-full">
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-semibold mb-2">Recent Projects</h2>
          <table class="w-full">
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Date</th>
                <th class="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.value.map((project, index) => (
                <tr key={index}>
                  <td>{project.name}</td>
                  <td>{project.date}</td>
                  <td>{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});
