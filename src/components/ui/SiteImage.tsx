"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { publicAsset } from "@/lib/base-path";
import type { ImageAsset } from "@/lib/images";

type SiteImageProps = {
  asset: ImageAsset;
  className?: string;
  imageClassName?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
  rounded?: string;
  overlay?: boolean;
};

function resolveSrc(path: string): string {
  if (path.startsWith("http") || path.startsWith("//")) return path;
  return publicAsset(path);
}

function ImageFallback({
  alt,
  className = "",
}: {
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-surface ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        className="h-10 w-10 text-brand/20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
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
  rounded = "rounded-sm",
  overlay = true,
}: SiteImageProps) {
  const localSrc = useMemo(() => resolveSrc(asset.local), [asset.local]);
  const fallbackSrc = useMemo(
    () => (asset.fallback ? resolveSrc(asset.fallback) : localSrc),
    [asset.fallback, localSrc],
  );

  const [src, setSrc] = useState(localSrc);
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    if (src !== fallbackSrc) {
      setSrc(fallbackSrc);
      return;
    }
    setFailed(true);
  }, [fallbackSrc, src]);

  if (failed) {
    return (
      <ImageFallback
        alt={asset.alt}
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
        className={`transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.015] ${imageClassName}`}
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-brand-dark/5 to-transparent" />
      )}
      {showCaption && asset.caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-dark/40 px-4 py-3 text-xs font-medium tracking-wide text-white backdrop-blur-sm sm:text-sm">
          {asset.caption}
        </figcaption>
      )}
    </figure>
  );
}
