import { component$ } from '@builder.io/qwik';

export interface ImageCardProps {
  src: string;
  alt: string;
  tailwindAtributes: string;
}
export const ImageCard = component$(({ src, alt, tailwindAtributes }: ImageCardProps) => {
  return <img loading="lazy" src={src} alt={alt} class={tailwindAtributes} />;
});

