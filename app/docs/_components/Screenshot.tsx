import Image from "next/image";

export function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line/60 shadow-xl ring-1 ring-black/5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-cover object-top"
        />
      </div>
      {caption && <figcaption className="mt-3 text-center text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
