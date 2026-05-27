"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { ImageAsset } from "@/lib/images";

type SiteImageProps = {
  asset: ImageAsset;
  className?: string;
  imageClassName?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
  showHint?: boolean;
  rounded?: string;
};

function PhotoSlot({
  alt,
  localPath,
  className = "",
}: {
  alt: string;
  localPath: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-br from-brand/8 via-surface to-brand/5 p-6 text-center ring-1 ring-dashed ring-brand/25 ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </span>
      <p className="mt-3 text-sm font-medium text-foreground">Your photo here</p>
      <p className="mt-1 max-w-[200px] text-xs text-muted">{localPath}</p>
    </div>
  );
}

export function SiteImage({
  asset,
  className = "",
  imageClassName = "object-cover",
  fill = true,
  sizes = "100vw",
  priority = false,
  showCaption = false,
  showHint = false,
  rounded = "rounded-2xl",
}: SiteImageProps) {
  const [src, setSrc] = useState(asset.local);
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    if (src === asset.local && asset.fallback) {
      setSrc(asset.fallback);
    } else {
      setFailed(true);
    }
  }, [asset.fallback, asset.local, src]);

  if (failed) {
    return (
      <PhotoSlot
        alt={asset.alt}
        localPath={asset.local}
        className={`${rounded} ${className} ${fill ? "absolute inset-0" : "min-h-[200px]"}`}
      />
    );
  }

  return (
    <figure className={`group relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={src}
        alt={asset.alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        onError={handleError}
        className={`transition-transform duration-700 group-hover:scale-[1.03] ${imageClassName}`}
        {...(!fill ? { width: 800, height: 600 } : {})}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-60" />
      {showCaption && asset.caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white">
          {asset.caption}
        </figcaption>
      )}
      {showHint && src === asset.fallback && (
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
          Sample photo
        </span>
      )}
    </figure>
  );
}
