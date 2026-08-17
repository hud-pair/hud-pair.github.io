import Image from "next/image";

export function ImageSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        sizes="(min-width: 1024px) 1152px, 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}
