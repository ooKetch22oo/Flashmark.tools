import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { Icon } from '../logo/logo';

export interface HeaderProps {
  name: string;
}

export const Header = component$((props: HeaderProps) => {
  const location = useLocation();
  const isRootPath = location.url.pathname === '/';

  return (
    <header class="text-black p-4 flex items-center justify-between">
      <div class="flex items-center">
        <Icon
          width="50"
          height="50"
          viewBox="0 0 112 112"
          fill="var(--swatch--brand)"
          xmlns="http://www.w3.org/2000/svg"
          pathData={[
            "M97.3391 0.399386C97.9771 0.730478 98.4707 1.24546 98.7395 1.86021C99.0082 2.47495 99.0362 3.15312 98.8187 3.78392L87.0793 37.9328H108.74C109.376 37.9325 109.999 38.0992 110.531 38.4121C111.063 38.7251 111.481 39.1707 111.733 39.6938C111.985 40.217 112.061 40.7949 111.951 41.3561C111.84 41.9173 111.549 42.4374 111.112 42.852L58.966 92.453C58.4614 92.9333 57.79 93.2465 57.0612 93.3415C56.3323 93.4364 55.589 93.3076 54.9525 92.976C54.3159 92.6443 53.8236 92.1294 53.5557 91.5152C53.2879 90.901 53.2604 90.2237 53.4776 89.5937L65.217 55.439H43.5568C42.9202 55.4392 42.2975 55.2726 41.7656 54.9596C41.2336 54.6466 40.8157 54.2011 40.5633 53.6779C40.311 53.1547 40.2353 52.5769 40.3456 52.0156C40.456 51.4544 40.7474 50.9344 41.1841 50.5197L93.3303 0.918737C93.8343 0.439062 94.5047 0.126105 95.2325 0.0307543C95.9603 -0.0645967 96.7027 0.0632653 97.3391 0.39355V0.399386Z",
            "M88.2518 77.324C87.7901 77.7846 87.5343 78.3842 87.5343 79.0061V98.299C87.5343 99.6836 86.2923 100.805 84.7626 100.802L15.2883 100.66C13.7634 100.657 12.5291 99.5372 12.5291 98.157V35.39C12.5291 34.0077 13.7672 32.8871 15.2945 32.8871H45.9391C46.6631 32.8871 47.3583 32.63 47.8753 32.1712L55.0182 25.8315C56.7866 24.2619 55.5588 21.5414 53.082 21.5414H2.76543C1.23813 21.5414 0 22.662 0 24.0444V109.497C0 110.879 1.23813 112 2.76543 112H97.2979C98.8252 112 100.063 110.879 100.063 109.497V72.0266C100.063 69.7378 96.9495 68.6496 95.2501 70.3446L88.2518 77.324Z"
          ]}
        />
        <span class="logo text-4xl font-bold ml-4">{props.name}</span>
      </div>
      <nav class={isRootPath ? '' : 'hidden'}>
        <Link href="#intro" class="mx-2">Intro</Link>
        <Link href="#features" class="mx-2">Features</Link>
        <Link href="#pricing" class="mx-2">Pricing</Link>
        <Link href="#footer" class="mx-2">Book A Call</Link>
        <Link href="#founder" class="mx-2">Founder's Note</Link>
      </nav>
    </header>
  );
});
