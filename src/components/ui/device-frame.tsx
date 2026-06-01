"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";
import { RotatingDeviceScreen } from "@/components/ui/rotating-device-screen";

type ImageFit = "cover" | "contain" | "fill" | "top";

type DeviceScreenProps = {
  src: string;
  alt: string;
  label: string;
  fallbackTitle: string;
  fallbackCopy: string;
  accentClass: string;
  priority?: boolean;
  imageFit?: ImageFit;
  screenBg?: string;
};

function DeviceScreen({
  src,
  alt,
  label,
  fallbackTitle,
  fallbackCopy,
  accentClass,
  priority,
  imageFit = "cover",
  screenBg,
}: DeviceScreenProps) {
  const [failed, setFailed] = useState(false);
  const imageSrc = assetPath(src);

  return (
    <div className="device-screen" style={screenBg ? { background: screenBg } : undefined}>
      {!failed && imageFit === "top" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={alt}
          className="device-screen__image device-screen__image--top"
          onError={() => setFailed(true)}
        />
      ) : !failed ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          unoptimized
          className={`device-screen__image device-screen__image--${imageFit}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setFailed(true)}
          priority={priority}
        />
      ) : (
        <div className={`device-screen__fallback bg-gradient-to-br ${accentClass}`}>
          <p className="device-screen__fallback-label">{label}</p>
          <p className="device-screen__fallback-title">{fallbackTitle}</p>
          <p className="device-screen__fallback-copy">{fallbackCopy}</p>
        </div>
      )}
    </div>
  );
}

type LaptopFrameProps = {
  src?: string;
  slides?: string[];
  rotationIntervalMs?: number;
  alt: string;
  label: string;
  fallbackTitle: string;
  fallbackCopy: string;
  accentClass: string;
  priority?: boolean;
  imageFit?: ImageFit;
  screenBg?: string;
};

export function LaptopFrame({
  slides,
  rotationIntervalMs,
  src,
  ...props
}: LaptopFrameProps) {
  return (
    <div className="device-laptop" aria-hidden={false}>
      <div className="device-laptop__lid">
        <div className="device-laptop__bezel">
          <div className="device-laptop__camera" aria-hidden />
          {slides && slides.length > 0 ? (
            <RotatingDeviceScreen
              images={slides}
              alt={props.alt}
              intervalMs={rotationIntervalMs}
              imageFit={props.imageFit}
              screenBg={props.screenBg}
              priority={props.priority}
            />
          ) : (
            <DeviceScreen {...props} src={src!} />
          )}
        </div>
      </div>
      <div className="device-laptop__base">
        <div className="device-laptop__track" aria-hidden />
      </div>
    </div>
  );
}

type PhoneFrameProps = {
  src?: string;
  alt?: string;
  label?: string;
  fallbackTitle?: string;
  fallbackCopy?: string;
  accentClass?: string;
  imageFit?: ImageFit;
  screenBg?: string;
  aspectRatio?: string;
  children?: ReactNode;
};

export function PhoneFrame({
  aspectRatio,
  imageFit = "cover",
  screenBg = "#ffffff",
  children,
  ...props
}: PhoneFrameProps) {
  return (
    <div className="device-phone">
      <div
        className="device-phone__shell"
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <div className="device-phone__island" aria-hidden />
        {children ? (
          <div
            className="device-phone__screen device-phone__screen--app"
            style={{ background: screenBg }}
          >
            {children}
          </div>
        ) : (
          <DeviceScreen imageFit={imageFit} screenBg={screenBg} {...props} src={props.src!} alt={props.alt!} label={props.label!} fallbackTitle={props.fallbackTitle!} fallbackCopy={props.fallbackCopy!} accentClass={props.accentClass!} />
        )}
      </div>
    </div>
  );
}
