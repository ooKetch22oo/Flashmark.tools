import { component$ } from '@builder.io/qwik';

export interface HeaderProps {
  header: string;
  subheader: string;
}

export const Header = component$((props: HeaderProps) => {
  const { header, subheader } = props;

  return (
    <header class="bg-blue-600 text-white p-6">
      <h1 class="text-4xl font-bold">{header}</h1>
      <h2 class="text-xl mt-2">{subheader}</h2>
    </header>
  );
});