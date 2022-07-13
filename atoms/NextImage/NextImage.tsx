// Import Next.js dependencies
import Image, { ImageProps } from "next/image";

// Component export
export function NextImage(props: ImageProps) {
  const { alt } = props;

  return <Image alt={alt} {...props} />;
}
