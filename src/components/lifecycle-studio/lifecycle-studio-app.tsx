"use client";

import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import {
  getLifecycleStudioPattern,
  lifecycleStudioAppPath,
  lifecycleStudioPatterns,
  type LifecycleStudioPatternSlug,
} from "@/lib/lifecycle-studio-patterns";
import { getProject } from "@/lib/projects";

type Props = {
  patternSlug: LifecycleStudioPatternSlug;
};

export function LifecycleStudioApp({ patternSlug }: Props) {
  const pattern = getLifecycleStudioPattern(patternSlug);
  const project = getProject("lifecycle-architecture-studio");

  if (!pattern || !project) {
    return null;
  }

  const externalDemo =
    project.externalDemoUrl ?? "https://kentkong.github.io/lifecycle-architecture-studio/";

  return (
    <div className="las-app">
      <header className="las-app__topbar">
        <div className="las-app__topbar-inner">
          <div className="las-app__brand">
            <Link href={lifecycleStudioAppPath()} className="las-app__brand-mark" aria-label="Lifecycle Architecture Studio home">
              LAS
            </Link>
            <div>
              <p className="las-app__brand-eyebrow">Architecture explorer</p>
              <h1 className="las-app__brand-title">Lifecycle Architecture Studio</h1>
            </div>
          </div>
          <nav className="las-app__topnav" aria-label="Portfolio links">
            <Link href="/projects/lifecycle-architecture-studio" className="las-app__topnav-link">
              Project overview
            </Link>
            <Link href="/#projects" className="las-app__topnav-link">
              All projects
            </Link>
            <Link href={externalDemo} target="_blank" rel="noreferrer" className="las-app__topnav-link las-app__topnav-link--accent">
              GitHub demo ↗
            </Link>
          </nav>
        </div>
      </header>

      <div className="las-app__tabs-wrap">
        <div className="las-app__tabs-inner" role="tablist" aria-label="Reference architecture stacks">
          {lifecycleStudioPatterns.map((item) => {
            const active = item.slug === pattern.slug;
            return (
              <Link
                key={item.slug}
                href={lifecycleStudioAppPath(item.slug)}
                role="tab"
                aria-selected={active}
                className={`las-app__tab${active ? " las-app__tab--active" : ""}`}
              >
                {item.tabLabel}
              </Link>
            );
          })}
        </div>
      </div>

      <main className="las-app__main">
        <section className="las-app__canvas" aria-label={pattern.shortName}>
          <div className="las-app__canvas-frame">
            <Image
              key={pattern.slug}
              src={assetPath(pattern.image)}
              alt={`${pattern.shortName} diagram`}
              width={1600}
              height={1000}
              priority
              unoptimized
              className="las-app__canvas-image"
            />
          </div>
        </section>

        <aside className="las-app__inspector">
          <p className="las-app__inspector-label">Active stack</p>
          <h2>{pattern.shortName}</h2>
          <p className="las-app__inspector-summary">{pattern.summary}</p>
          <p className="las-app__inspector-copy">{pattern.description}</p>

          <div className="las-app__inspector-block">
            <h3>Platforms</h3>
            <ul className="las-app__tags">
              {pattern.platforms.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div className="las-app__inspector-block">
            <h3>Focus areas</h3>
            <ul className="las-app__list">
              {pattern.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
