"use client";

import { LaptopFrame, PhoneFrame } from "@/components/ui/device-frame";
import type { Project } from "@/lib/projects";

type ProjectDeviceShowcaseProps = {
  project: Project;
};

export function ProjectDeviceShowcase({ project }: ProjectDeviceShowcaseProps) {
  const screenProps = {
    fallbackTitle: project.name,
    fallbackCopy: project.tagline,
    accentClass: project.accent,
  };

  const hasLightDesktop = Boolean(project.previewImageDesktopLight);
  const hasMobile = project.showMobilePreview && project.previewImageMobile;

  return (
    <div
      className={`project-devices ${hasLightDesktop ? "project-devices--stacked" : ""} ${hasMobile ? "project-devices--dual" : ""}`}
    >
      <div className="project-devices__laptop">
        <p className="project-devices__label">
          {project.previewImagesDesktop
            ? "Desktop · Live tour"
            : hasLightDesktop
              ? "Desktop · Dark mode"
              : "Desktop"}
        </p>
        <LaptopFrame
          slides={project.previewImagesDesktop}
          rotationIntervalMs={project.previewRotationIntervalMs}
          src={project.previewImagesDesktop ? undefined : project.previewImageDesktop}
          alt={`${project.name} desktop preview`}
          label="Desktop"
          priority={project.slug === "gen-pulse"}
          imageFit="cover"
          screenBg={project.slug === "gen-pulse" ? "#0b1020" : "#f4f4f4"}
          {...screenProps}
        />
      </div>

      {hasLightDesktop && project.previewImageDesktopLight && (
        <div className="project-devices__laptop">
          <p className="project-devices__label">Desktop · Light mode</p>
          <LaptopFrame
            src={project.previewImageDesktopLight}
            alt={`${project.name} desktop light mode preview`}
            label="Desktop"
            imageFit="cover"
            screenBg="#f7f7fb"
            {...screenProps}
          />
        </div>
      )}

      {hasMobile && (
        <div className="project-devices__phone">
          <p className="project-devices__label">Mobile</p>
          <PhoneFrame
            src={project.previewImageMobile!}
            alt={`${project.name} mobile preview`}
            label="Mobile"
            imageFit="cover"
            screenBg="#eef0f8"
            aspectRatio={project.previewMobileAspectRatio ?? "393 / 852"}
            {...screenProps}
          />
        </div>
      )}
    </div>
  );
}
