"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { assetPath } from "@/lib/asset-path";

type ImageFit = "cover" | "contain" | "fill" | "top";

type RotatingDeviceScreenProps = {
  images: string[];
  alt: string;
  intervalMs?: number;
  fadeMs?: number;
  imageFit?: ImageFit;
  screenBg?: string;
  priority?: boolean;
};

export function RotatingDeviceScreen({
  images,
  alt,
  intervalMs = 3200,
  fadeMs = 1400,
  imageFit = "cover",
  screenBg = "#0a0a0b",
  priority,
}: RotatingDeviceScreenProps) {
  const fitClass = imageFit === "top" ? "cover" : imageFit;
  const [index, setIndex] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const resolvedImages = images.map(assetPath);

  useEffect(() => {
    const liveFrame = window.requestAnimationFrame(() => setIsLive(true));
    if (resolvedImages.length <= 1) {
      return () => window.cancelAnimationFrame(liveFrame);
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % resolvedImages.length);
    }, intervalMs);

    return () => {
      window.cancelAnimationFrame(liveFrame);
      window.clearInterval(timer);
    };
  }, [resolvedImages.length, intervalMs]);

  return (
    <div
      className={`device-screen device-screen--rotating${isLive ? " device-screen--rotating-live" : ""}`}
      style={{ background: screenBg, "--fade-ms": `${fadeMs}ms` } as CSSProperties}
      aria-live="polite"
    >
      {resolvedImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — screen ${i + 1} of ${resolvedImages.length}`}
          fill
          unoptimized
          priority={priority && i === 0}
          className={`device-screen__image device-screen__image--${fitClass} device-screen__slide ${i === index ? "device-screen__slide--active" : ""}`}
          sizes="(max-width: 768px) 100vw, 42rem"
        />
      ))}
    </div>
  );
}
