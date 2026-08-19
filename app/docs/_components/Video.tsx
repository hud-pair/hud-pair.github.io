export function Video({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-2xl border border-line/60 shadow-xl ring-1 ring-black/5">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src={src} controls className="w-full" />
      </div>
      {caption && <figcaption className="mt-3 text-center text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
