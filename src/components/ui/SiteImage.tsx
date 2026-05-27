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
  rounded?: string;
  overlay?: boolean;
};

function ImageFallback({
  alt,
  className = "",
}: {
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-brand/12 via-surface to-brand-dark/8 ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        className="h-10 w-10 text-brand/25"
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
  rounded = "rounded-2xl",
  overlay = true,
}: SiteImageProps) {
  const [src, setSrc] = useState(asset.local);
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    if (asset.fallback && src !== asset.fallback) {
      setSrc(asset.fallback);
      return;
    }
    setFailed(true);
  }, [asset.fallback, src]);

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
        className={`transition-transform duration-700 group-hover:scale-[1.03] ${imageClassName}`}
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />
      )}
      {showCaption && asset.caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white">
          {asset.caption}
        </figcaption>
      )}
    </figure>
  );
}
