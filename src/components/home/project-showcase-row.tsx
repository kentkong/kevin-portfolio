"use client";

import Link from "next/link";
import { useState } from "react";
import { ProjectDeviceShowcase } from "@/components/home/project-device-showcase";
import type { Project } from "@/lib/projects";

type ProjectShowcaseRowProps = {
  project: Project;
  index: number;
};

export function ProjectShowcaseRow({ project, index }: ProjectShowcaseRowProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`project-showcase ${index > 0 ? "project-showcase--spaced" : ""}`}>
      <div className="project-showcase__hero">
        <h2 className="project-showcase__hero-name">{project.name}</h2>
        <ProjectDeviceShowcase project={project} />
        <p className="project-showcase__hero-caption">
          Product preview — explore the thinking and live demo below.
        </p>
      </div>

      <div className="project-showcase__body">
        <div className="project-showcase__overview">
          <h2 className="project-showcase__title">{project.headline}</h2>
          <p className="project-showcase__overview-text">{project.overview}</p>
          <div className="project-showcase__actions">
            <Link href={`/projects/${project.slug}`} className="site-btn site-btn--primary">
              View Case Study
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="site-btn site-btn--ghost"
            >
              Open Live Demo
            </Link>
          </div>
        </div>

        <div className="project-showcase__thinking">
          <p className="project-showcase__thinking-label">How I got here</p>

          <div className="project-showcase__thinking-block">
            <h3>The challenge</h3>
            <p>{project.challenge}</p>
          </div>

          <div className="project-showcase__resolution">
            <div className="project-showcase__resolution-step">
              <span>Observation</span>
              <p>{project.observation}</p>
            </div>
            <div className="project-showcase__resolution-step">
              <span>Hypothesis</span>
              <p>{project.hypothesis}</p>
            </div>
            <div className="project-showcase__resolution-step">
              <span>Solution</span>
              <p>{project.solution}</p>
            </div>
          </div>

          <button
            type="button"
            className="project-showcase__expand-trigger"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
          >
            {expanded ? "Hide walkthrough" : "Explore walkthrough & learnings →"}
          </button>
        </div>
      </div>

      <div className={`project-showcase__expand ${expanded ? "project-showcase__expand--open" : ""}`}>
        <div className="project-showcase__expand-inner">
          <p className="site-label">Product walkthrough</p>
          <div className="project-showcase__walkthrough">
            {project.walkthrough.map((item) => (
              <div key={item.title} className="project-showcase__walkthrough-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p className="project-showcase__walkthrough-impact">{item.impact}</p>
              </div>
            ))}
          </div>
          <p className="project-showcase__learned-label">What I learned</p>
          <ul className="project-showcase__learned">
            {project.learned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
