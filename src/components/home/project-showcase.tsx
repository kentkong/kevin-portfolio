import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { PulseOpsStackFlow } from "@/components/home/pulse-ops-stack-flow";
import { LaptopFrame, PhoneFrame } from "@/components/ui/device-frame";
import { RotatingDeviceScreen } from "@/components/ui/rotating-device-screen";
import { assetPath } from "@/lib/asset-path";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

type SelectedProject = {
  slug: "gen-pulse" | "lifecycle-architecture-studio" | "pulse-ops" | "sprintiq";
  discipline: string;
  description: string;
};

const selectedProjects: SelectedProject[] = [
  {
    slug: "gen-pulse",
    discipline: "Operations / Internal Product / Digital Experience",
    description:
      "A real-time operational command centre for delivery health, team presence, workload, blockers and business reporting.",
  },
  {
    slug: "lifecycle-architecture-studio",
    discipline: "CRM / Customer Experience / Journey Architecture",
    description:
      "An interactive architecture explorer for understanding how CRM, data, activation, engagement, analytics and AI systems connect.",
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
];

const sprintStates = [
  { label: "Objective", image: "/projects/sprintiq/objective.png" },
  { label: "Blueprint", image: "/projects/sprintiq/blueprint.png" },
  { label: "Review", image: "/projects/sprintiq/review.png" },
  { label: "Ready", image: "/projects/sprintiq/ready.png" },
];

function getProject(slug: SelectedProject["slug"]) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Missing selected project: ${slug}`);
  }
  return project;
}

export function ProjectShowcase() {
  const genPulse = getProject("gen-pulse");
  const lifecycleStudio = getProject("lifecycle-architecture-studio");
  const pulseOps = getProject("pulse-ops");
  const sprintIq = getProject("sprintiq");

  return (
    <section id="projects" className="selected-work" aria-labelledby="selected-work-title">
      <div className="site-container selected-work__container">
        <header className="selected-work__intro">
          <p className="selected-work__eyebrow">Section 02</p>
          <h2 id="selected-work-title" className="selected-work__title">
            Selected Work
          </h2>
          <p className="selected-work__lead">
            A focused selection of digital products, lifecycle systems and AI-assisted workflows
            that give visual evidence to the portfolio positioning.
          </p>
        </header>

        <div className="selected-work__projects">
          <SelectedProjectArticle
            project={genPulse}
            config={selectedProjects[0]}
            variant="flagship"
            visual={<GenPulseVisual project={genPulse} />}
          />

          <SelectedProjectArticle
            project={lifecycleStudio}
            config={selectedProjects[1]}
            variant="wide"
            visual={<LifecycleVisual project={lifecycleStudio} />}
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
  return (
    <article
      className={`selected-project selected-project--${config.slug} selected-project--${variant}`}
    >
      <div className="selected-project__copy">
        <p className="selected-project__discipline">{config.discipline}</p>
        <h3 className="selected-project__title">
          <Link href={project.liveUrl} target="_blank" rel="noreferrer">
            {project.name}
          </Link>
        </h3>
        <p className="selected-project__description">{config.description}</p>
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="selected-project__link"
        >
          View Live Project ↗
        </Link>
      </div>

      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="selected-project__visual-link"
        aria-label={`View live project: ${project.name}`}
      >
        {visual}
      </Link>
    </article>
  );
}

function GenPulseVisual({ project }: { project: Project }) {
  return (
    <div className="selected-visual selected-visual--gen-pulse">
      <div className="selected-visual__laptop">
        <LaptopFrame
          src={project.previewImageDesktop}
          alt="Gen Pulse desktop operational dashboard"
          label="Desktop"
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
          src="/projects/gen-pulse-mobile-light.png"
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
        />
      </div>
    </div>
  );
}

function PulseOpsVisual({ project }: { project: Project }) {
  return (
    <div className="selected-visual selected-visual--pulse-ops">
      <div className="selected-visual__pulse-laptop">
        <LaptopFrame
          slides={project.previewImagesDesktop}
          rotationIntervalMs={project.previewRotationIntervalMs}
          alt="Pulse-Ops AI operational intelligence screens"
          label="Desktop"
          fallbackTitle={project.name}
          fallbackCopy={project.tagline}
          accentClass={project.accent}
          imageFit="cover"
          screenBg="#f4f4f4"
        />
      </div>
      <div className="selected-visual__stack">
        <PulseOpsStackFlow />
      </div>
    </div>
  );
}

function SprintIqVisual({ project }: { project: Project }) {
  return (
    <div className="selected-visual selected-visual--sprintiq">
      {sprintStates.map((state, index) => (
        <div
          key={state.label}
          className="selected-sprint-card"
          style={{ "--sequence-index": index } as CSSProperties}
        >
          <p className="selected-sprint-card__label">{state.label}</p>
          <div className="selected-sprint-card__screen">
            <Image
              src={assetPath(state.image)}
              alt={`${project.name} ${state.label} workflow screen`}
              fill
              loading="eager"
              unoptimized
              sizes="(max-width: 768px) 78vw, 34vw"
              className="selected-sprint-card__image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
