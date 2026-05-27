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

function resolveSrc(path: string) {
  if (path.startsWith("http") || path.startsWith("/SPCG")) return path;
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
    />
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
  rounded = "",
  overlay = true,
}: SiteImageProps) {
  const localSrc = useMemo(() => resolveSrc(asset.local), [asset.local]);
  const fallbackSrc = useMemo(
    () => (asset.fallback ? resolveSrc(asset.fallback) : ""),
    [asset.fallback],
  );

  const [src, setSrc] = useState(localSrc);
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    if (fallbackSrc && src !== fallbackSrc) {
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
        className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${imageClassName}`}
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-brand-dark/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-65" />
      )}
      {showCaption && asset.caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-dark/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {asset.caption}
        </figcaption>
      )}
    </figure>
  );
}
