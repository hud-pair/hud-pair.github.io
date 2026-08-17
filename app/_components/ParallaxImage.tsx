import Image from "next/image";

export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line/60 shadow-2xl ring-1 ring-black/5">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 1152px, 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}
