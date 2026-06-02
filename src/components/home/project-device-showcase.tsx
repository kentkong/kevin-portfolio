"use client";

import Link from "next/link";
import { PulseOpsStackFlow } from "@/components/home/pulse-ops-stack-flow";
import { ProjectBrandName } from "@/components/home/project-brand-name";
import { SprintIQStackFlow } from "@/components/home/sprintiq-stack-flow";
import { LaptopFrame, PhoneFrame } from "@/components/ui/device-frame";
import type { Project } from "@/lib/projects";

type ProjectDeviceShowcaseProps = {
  project: Project;
};

function LaptopActions({ project }: { project: Project }) {
  if (project.comingSoon) return null;

  return (
    <div className="project-devices__actions">
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="site-btn site-btn--ghost"
      >
        Open Live Demo
      </Link>
    </div>
  );
}

function DeviceLabel({ project, mode }: { project: Project; mode: string }) {
  return (
    <p className="project-devices__label">
      <span className="project-devices__label-name">
        <ProjectBrandName project={project} />
      </span>
      <span className="project-devices__label-mode"> · {mode}</span>
    </p>
  );
}

function deviceLayoutClass(hasLightDesktop: boolean, hasMobile: boolean) {
  if (hasLightDesktop && hasMobile) return "project-devices project-devices--stacked-with-mobile";
  if (hasLightDesktop) return "project-devices project-devices--stacked";
  if (hasMobile) return "project-devices project-devices--dual";
  return "project-devices";
}

export function ProjectDeviceShowcase({ project }: ProjectDeviceShowcaseProps) {
  const screenProps = {
    fallbackTitle: project.name,
    fallbackCopy: project.tagline,
    accentClass: project.accent,
  };

  const hasLightDesktop = Boolean(project.previewImageDesktopLight);
  const hasMobile = project.showMobilePreview && project.previewImageMobile;
  const mobileScreenBg =
    project.slug === "gen-pulse" ? "#f4f6fb" : "#eef0f8";

  return (
    <div className={deviceLayoutClass(hasLightDesktop, Boolean(hasMobile))}>
      <div className="project-devices__laptops">
        <div className="project-devices__laptop project-devices__laptop-card">
          <DeviceLabel
            project={project}
            mode={
              project.comingSoon
                ? "Coming soon"
                : project.previewImagesDesktop
                  ? "Desktop · Live tour"
                  : hasLightDesktop
                    ? "Desktop · Dark mode"
                    : "Desktop"
            }
          />
          <LaptopActions project={project} />
          <LaptopFrame
            slides={project.previewImagesDesktop}
            rotationIntervalMs={project.previewRotationIntervalMs}
            src={project.previewImagesDesktop ? undefined : project.previewImageDesktop}
            alt={`${project.name} desktop preview`}
            label="Desktop"
            priority={project.slug === "gen-pulse"}
            imageFit="cover"
            screenBg={project.comingSoon ? "#080a0d" : project.slug === "gen-pulse" ? "#0b1020" : "#f4f4f4"}
            comingSoon={project.comingSoon}
            {...screenProps}
          />
          {project.slug === "pulse-ops" ? <PulseOpsStackFlow /> : null}
          {project.slug === "sprintiq" ? <SprintIQStackFlow /> : null}
        </div>

        {hasLightDesktop && project.previewImageDesktopLight && (
          <div className="project-devices__laptop project-devices__laptop-card project-devices__laptop-card--plain">
            <DeviceLabel project={project} mode="Desktop · Light mode" />
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
      </div>

      {hasMobile && (
        <div className="project-devices__phone project-devices__phone-card">
          <DeviceLabel project={project} mode="Mobile" />
          <PhoneFrame
            src={project.previewImageMobile!}
            alt={`${project.name} mobile preview`}
            label="Mobile"
            imageFit="cover"
            screenBg={mobileScreenBg}
            aspectRatio={project.previewMobileAspectRatio ?? "393 / 852"}
            {...screenProps}
          />
        </div>
      )}
    </div>
  );
}
