import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LaptopFrame, PhoneFrame } from "@/components/ui/device-frame";
import { RotatingDeviceScreen } from "@/components/ui/rotating-device-screen";
import { assetPath } from "@/lib/asset-path";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

type SelectedProject = {
  slug: "revival" | "gen-pulse" | "lifecycle-architecture-studio" | "pulse-ops" | "sprintiq";
  discipline: string;
  description: string;
};

const selectedProjects: SelectedProject[] = [
  {
    slug: "revival",
    discipline: "UX / Product Design / Visual Design",
    description: "Visualise your dream Triumph Desert Sled motorcycle build before you buy it.",
  },
  {
    slug: "gen-pulse",
    discipline: "Operations / Internal Product / Digital Experience",
    description: "Real-time operational visibility for modern teams.",
  },
  {
    slug: "pulse-ops",
    discipline: "Technology / Operations / AI",
    description:
      "A stack-agnostic intelligence layer for account health, lifecycle signals and recommended operational next actions.",
  },
  {
    slug: "sprintiq",
    discipline: "AI / Workflow / Operational Optimisation",
    description:
      "A workflow concept that turns business objectives into structured delivery plans, milestones, risks and next steps.",
  },
  {
    slug: "lifecycle-architecture-studio",
    discipline: "CRM / Customer Experience / Journey Architecture",
    description:
      "An interactive architecture explorer for understanding how CRM, data, activation, engagement, analytics and AI systems connect.",
  },
];

function getProject(slug: SelectedProject["slug"]) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Missing selected project: ${slug}`);
  }
  return project;
}

export function ProjectShowcase() {
  const revival = getProject("revival");
  const genPulse = getProject("gen-pulse");
  const lifecycleStudio = getProject("lifecycle-architecture-studio");
  const pulseOps = getProject("pulse-ops");
  const sprintIq = getProject("sprintiq");

  return (
    <section id="projects" className="selected-work" aria-labelledby="selected-work-title">
      <div className="site-container selected-work__container">
        <header className="selected-work__intro">
          <h2 id="selected-work-title" className="selected-work__title">
            <span className="selected-work__title-line">Applications</span>
            <span className="selected-work__title-line">&amp; Case Studies</span>
          </h2>
        </header>

        <div className="selected-work__projects">
          <SelectedProjectArticle
            project={revival}
            config={selectedProjects[0]}
            variant="wide"
            visual={<RevivalVisual project={revival} />}
          />

          <SelectedProjectArticle
            project={genPulse}
            config={selectedProjects[1]}
            variant="flagship"
            visual={<GenPulseVisual project={genPulse} />}
          />

          <SelectedProjectArticle
            project={pulseOps}
            config={selectedProjects[2]}
            variant="technology"
            visual={<PulseOpsVisual project={pulseOps} />}
          />

          <SelectedProjectArticle
            project={sprintIq}
            config={selectedProjects[3]}
            variant="sequence"
            visual={<SprintIqVisual project={sprintIq} />}
          />

          <SelectedProjectArticle
            project={lifecycleStudio}
            config={selectedProjects[4]}
            variant="wide"
            visual={<LifecycleVisual project={lifecycleStudio} />}
          />
        </div>
      </div>
    </section>
  );
}

function SelectedProjectArticle({
  project,
  config,
  variant,
  visual,
}: {
  project: Project;
  config: SelectedProject;
  variant: "flagship" | "wide" | "technology" | "sequence";
  visual: ReactNode;
}) {
  const overviewHref =
    project.slug === "gen-pulse"
      ? "/projects/gen-pulse"
      : project.slug === "pulse-ops"
        ? "/projects/pulse-ops"
        : project.slug === "sprintiq"
          ? "/projects/sprintiq"
          : null;
  const titleHref = overviewHref ?? project.liveUrl;
  const titleLinkProps = overviewHref ? {} : { target: "_blank", rel: "noreferrer" };

  return (
    <article
      className={`selected-project selected-project--${config.slug} selected-project--${variant}`}
    >
      <div className="selected-project__copy">
        <p className="selected-project__discipline">{config.discipline}</p>
        <div className="selected-project__title-row">
          <h3 className="selected-project__title">
            <Link href={titleHref} {...titleLinkProps}>
              {project.name}
            </Link>
          </h3>
        </div>
        <p className="selected-project__description">{config.description}</p>
        {project.slug === "gen-pulse" ? (
          <div className="selected-project__brand-row" aria-label="Gen Digital, Avast and Norton logos">
            <Image
              src={assetPath("/logos/about/gen-digital.svg")}
              alt="Gen Digital logo"
              width={108}
              height={42}
              className="selected-project__brand-logo selected-project__brand-logo--gen"
              unoptimized
            />
            <Image
              src={assetPath("/projects/gen-pulse/avast-norton-logo-lockup.png")}
              alt="Avast and Norton logos"
              width={918}
              height={140}
              className="selected-project__brand-lockup"
              unoptimized
            />
          </div>
        ) : null}
        <div
          style={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            marginTop: "1.4rem",
            width: "fit-content",
          }}
        >
          {overviewHref ? (
            <Link href={overviewHref} className="selected-project__link selected-project__link--overview-focus">
              Project overview →
            </Link>
          ) : null}
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="selected-project__link"
          >
            {project.slug === "pulse-ops" ? "View full project ↗" : "View live project ↗"}
          </Link>
        </div>
      </div>

      {overviewHref ? (
        <div className="selected-project__visual-frame" aria-label={`${project.name} visual preview`}>
          {visual}
        </div>
      ) : (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="selected-project__visual-link"
          aria-label={`View live project: ${project.name}`}
        >
          {visual}
        </Link>
      )}
    </article>
  );
}

function RevivalVisual({ project }: { project: Project }) {
  return (
    <div className="selected-visual selected-visual--revival">
      <div className="selected-revival-frame">
        <Image
          src={assetPath(project.previewImageDesktop)}
          alt="Revival Triumph Desert Sled product concept"
          fill
          unoptimized
          sizes="(max-width: 900px) 100vw, 56vw"
          className="selected-revival-frame__image"
          priority
        />
      </div>
    </div>
  );
}

function GenPulseVisual({ project }: { project: Project }) {
  const desktopScreens = [
    project.previewImageDesktop,
    project.previewImageDesktopLight ?? project.previewImageDesktop,
  ];

  return (
    <div className="selected-visual selected-visual--gen-pulse">
      <div className="selected-visual__laptops">
        <LaptopFrame
          slides={desktopScreens}
          rotationIntervalMs={2800}
          alt="Gen Pulse desktop operational dashboard"
          label="Dark mode desktop"
          fallbackTitle={project.name}
          fallbackCopy={project.tagline}
          accentClass={project.accent}
          priority
          imageFit="cover"
          screenBg="#0b1020"
        />
      </div>
      <div className="selected-visual__phone">
        <PhoneFrame
          src="/projects/gen-pulse-mobile-dark.png"
          alt="Gen Pulse mobile experience"
          label="Mobile"
          fallbackTitle={project.name}
          fallbackCopy={project.tagline}
          accentClass={project.accent}
          imageFit="cover"
          screenBg="#f4f6fb"
          aspectRatio="393 / 852"
        />
      </div>
    </div>
  );
}

function LifecycleVisual({ project }: { project: Project }) {
  return (
    <div className="selected-visual selected-visual--browser">
      <div className="selected-browser">
        <div className="selected-browser__bar" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <RotatingDeviceScreen
          images={project.previewImagesDesktop ?? [project.previewImageDesktop]}
          alt="Lifecycle Architecture Studio architecture state"
          intervalMs={project.previewRotationIntervalMs}
          imageFit="cover"
          screenBg="#0b1020"
          priority
        />
      </div>
    </div>
  );
}

function PulseOpsVisual({ project }: { project: Project }) {
  return (
    <div className="selected-visual selected-visual--pulse-ops">
      <LaptopFrame
        slides={project.previewImagesDesktop}
        rotationIntervalMs={project.previewRotationIntervalMs}
        alt="Pulse-Ops AI operational intelligence screens"
        label="Desktop"
        fallbackTitle={project.name}
        fallbackCopy={project.tagline}
        accentClass={project.accent}
        priority
        imageFit="cover"
        screenBg="#f4f4f4"
      />
    </div>
  );
}

function SprintIqVisual({ project }: { project: Project }) {
  return (
    <div className="selected-visual selected-visual--sprintiq">
      <LaptopFrame
        slides={project.previewImagesDesktop}
        rotationIntervalMs={project.previewRotationIntervalMs}
        alt="SprintIQ planning workflow screens"
        label="Desktop"
        fallbackTitle={project.name}
        fallbackCopy={project.tagline}
        accentClass={project.accent}
        priority
        imageFit="cover"
        screenBg="#f4f7fb"
      />
    </div>
  );
}
