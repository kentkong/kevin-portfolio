"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { getProject } from "@/lib/projects";
import {
  journeyScenarios,
  journeySteps,
  lasV14Nav,
  techCategories,
  type LasV14PageId,
  type TechCategoryKey,
} from "./lifecycle-studio-v14-data";
import "./lifecycle-studio-v14.css";

function BrandLogo() {
  return (
    <svg className="brandLogo" viewBox="0 0 64 64" aria-label="Lifecycle Architecture Studio logo">
      <defs>
        <linearGradient id="las-lg1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#dcecff" />
          <stop offset=".55" stopColor="#74b8ff" />
          <stop offset="1" stopColor="#557ee8" />
        </linearGradient>
        <linearGradient id="las-lg2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#6bb8ff" />
          <stop offset="1" stopColor="#385b9e" />
        </linearGradient>
      </defs>
      <path d="M32 4 56 18v28L32 60 8 46V18Z" fill="none" stroke="url(#las-lg1)" strokeWidth="3" />
      <path d="M32 10 50 21v20L32 52 14 41V21Z" fill="#14233a" stroke="#8fc8ff" strokeWidth="2" />
      <path d="M32 15 44 22v14L32 43 20 36V22Z" fill="url(#las-lg2)" opacity=".9" />
      <path
        d="m14 33 18 11 18-11M8 39l24 14 24-14"
        fill="none"
        stroke="#79adf4"
        strokeWidth="2"
        opacity=".9"
      />
    </svg>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="diagram arch">
      <div className="channelRow">
        {[
          ["✉", "Email", "Lifecycle campaigns", "cyan"],
          ["▣", "Mobile Push", "App notifications", "blue"],
          ["▤", "In-App", "Product messages", "violet"],
          ["●●", "SMS", "Direct messaging", "cyan"],
          ["◢", "Paid Media", "Audience activation", "pink"],
          ["▱", "Web Personalisation", "On-site experience", "green"],
        ].map(([ico, title, sub, color]) => (
          <div key={title} className={`tile ${color}`}>
            <div className="ico">{ico}</div>
            <b>{title}</b>
            <span>{sub}</span>
          </div>
        ))}
      </div>
      <div className="systems">
        <div className="sys high">
          <b>HIGHTOUCH</b>
          <span>Reverse ETL · Audience Sync</span>
        </div>
        <div className="sys braze">
          <b>BRAZE</b>
          <span>Journeys · Campaigns · Orchestration</span>
        </div>
        <div className="sys snow">
          <b>SNOWFLAKE</b>
          <span>Unified Customer Data · Analytics</span>
        </div>
        <div className="sys ai">
          <b>OPENAI · CLAUDE</b>
          <span>Prediction · Personalisation · Content</span>
        </div>
        <div className="sys dbt">
          <b>dbt</b>
          <span>Transformation · Customer Models</span>
        </div>
        <div className="sys five">
          <b>FIVETRAN</b>
          <span>Data Ingestion · ELT</span>
        </div>
      </div>
      <div className="sourceRow">
        {[
          ["◎", "Website", "Behavioural data", "violet"],
          ["▯", "Mobile App", "Product events", "blue"],
          ["☁", "CRM", "Customer & account", "cyan"],
          ["▰", "E-commerce", "Orders · Products", "green"],
          ["◉", "Support", "Tickets · Conversations", "pink"],
          ["◫", "3rd Party", "Enrichment · Intent", "violet"],
        ].map(([ico, title, sub, color]) => (
          <div key={title} className={`tile ${color}`}>
            <div className="ico">{ico}</div>
            <b>{title}</b>
            <span>{sub}</span>
          </div>
        ))}
      </div>
      <svg className="svgmap" viewBox="0 0 1400 610" preserveAspectRatio="none" aria-hidden>
        <defs>
          <marker id="las-ac" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7Z" fill="#22d3ee" />
          </marker>
          <marker id="las-av" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7Z" fill="#9b6cff" />
          </marker>
          <marker id="las-ag" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7Z" fill="#42e8a5" />
          </marker>
          <marker id="las-ap" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7Z" fill="#d76cff" />
          </marker>
        </defs>
        <path className="route thin" stroke="#9b6cff" d="M270 510V470H700" />
        <path className="route thin" stroke="#4f7cff" d="M440 510V470" />
        <path className="route thin" stroke="#22d3ee" d="M610 510V470" />
        <path className="route thin" stroke="#42e8a5" d="M790 510V470" />
        <path className="route thin" stroke="#d76cff" d="M960 510V470" />
        <path className="route thin" stroke="#9b6cff" d="M1130 510V470H700" />
        <path className="route bus" stroke="#22d3ee" d="M700 470V430" markerEnd="url(#las-ac)" />
        <path className="route" stroke="#4f7cff" d="M585 405V380H700V350" markerEnd="url(#las-ac)" />
        <path className="route" stroke="#42e8a5" d="M815 405V380H700" />
        <path className="route" stroke="#9b6cff" d="M780 320H1010" markerEnd="url(#las-av)" />
        <path className="route" stroke="#42e8a5" d="M650 300V250H500V225" markerEnd="url(#las-ag)" />
        <path className="route thin" stroke="#d76cff" d="M1050 300V250H900V225" markerEnd="url(#las-ap)" />
        <path className="route" stroke="#22d3ee" d="M560 205H840" markerEnd="url(#las-ac)" />
        <path className="route bus" stroke="#22d3ee" d="M900 175V135H700V115" />
        <path className="route thin" stroke="#22d3ee" d="M245 115H1155" />
        <path className="route thin" stroke="#22d3ee" d="M245 115V104" markerEnd="url(#las-ac)" />
        <path className="route thin" stroke="#4f7cff" d="M425 115V104" markerEnd="url(#las-ac)" />
        <path className="route thin" stroke="#9b6cff" d="M605 115V104" markerEnd="url(#las-av)" />
        <path className="route thin" stroke="#22d3ee" d="M785 115V104" markerEnd="url(#las-ac)" />
        <path className="route thin" stroke="#d76cff" d="M965 115V104" markerEnd="url(#las-ap)" />
        <path className="route thin" stroke="#42e8a5" d="M1155 115V104" markerEnd="url(#las-ag)" />
      </svg>
    </div>
  );
}

function PersonalisationLoop() {
  const steps = [
    ["01", "CUSTOMER BEHAVIOUR", "Browsing · clicks · purchases · preferences", "data"],
    ["02", "CUSTOMER DATA", "CRM · warehouse · profiles · events", "data"],
    ["03", "UNDERSTANDING", "Segments · lifecycle stage · engagement", "data"],
    ["04", "CRM & BUSINESS INSIGHT", "Performance · opportunities · customer needs", "people"],
    ["05", "LIFECYCLE STRATEGY", "Who · what · when · why", "people"],
    ["06", "JOURNEY DEVELOPMENT", "Triggers · content · personalisation · QA", "people"],
    ["07", "PERSONALISED EXPERIENCE", "Email · push · in-app · SMS", "output"],
  ] as const;

  return (
    <div className="feedbackLoop panel">
      <div className="loopIntro">
        <div className="kicker">CUSTOMER DATA → PERSONALISATION LOOP</div>
        <h2>Turn customer behaviour into more relevant lifecycle communication</h2>
        <p>
          Customer signals become useful when teams can turn them into insight, lifecycle decisions and better
          communications — then learn from the response.
        </p>
      </div>
      <div className="loopTrack">
        {steps.flatMap(([num, title, sub, kind], index) => {
          const item = (
            <div key={title} className={`loopItem ${kind}`}>
              <b>{num}</b>
              <strong>{title}</strong>
              <span>{sub}</span>
            </div>
          );
          if (index === steps.length - 1) return [item];
          return [item, <i key={`arrow-${title}`}>→</i>];
        })}
      </div>
      <div className="returnLoop">
        <span>↻</span>
        <div>
          <b>Customer response creates new signals</b>
          <small>
            Engagement and conversion data feed back into the customer profile, helping the next lifecycle
            decision become more relevant.
          </small>
        </div>
      </div>
      <div className="loopLegend">
        <span>
          <i className="tealDot" />
          Customer & data signals
        </span>
        <span>
          <i className="copperDot" />
          Human / business decision-making
        </span>
        <span>
          <i className="iceDot" />
          Customer-facing experience
        </span>
      </div>
    </div>
  );
}

type Props = {
  initialPage?: LasV14PageId;
};

export function LifecycleStudioV14App({ initialPage = "p1" }: Props) {
  const project = getProject("lifecycle-architecture-studio");
  const externalDemo =
    project?.externalDemoUrl ?? "https://kentkong.github.io/lifecycle-architecture-studio/";

  const [page, setPage] = useState<LasV14PageId>(initialPage);
  const [techKey, setTechKey] = useState<TechCategoryKey>("CRM");
  const [journeyIndex, setJourneyIndex] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const tech = techCategories.find((c) => c.key === techKey) ?? techCategories[0];
  const journey = journeySteps[journeyIndex];

  const goToPage = useCallback((id: LasV14PageId) => {
    setPage(id);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="las-v14">
      <div className="las-v14-portfolio-bar">
        <div className="las-v14-portfolio-bar__inner">
          <Link href="/projects/lifecycle-architecture-studio">Project overview</Link>
          <Link href="/#projects">All projects</Link>
          <a href={externalDemo} target="_blank" rel="noreferrer">GitHub demo ↗</a>
        </div>
      </div>
      <div className="shell">
        <header className="header">
          <div className="brand">
            <BrandLogo />
            <div>
              <b>Lifecycle Architecture Studio</b>
              <small>INTERACTIVE ARCHITECTURE EXPLORER</small>
            </div>
          </div>
          <nav className="nav" aria-label="Studio sections">
            {lasV14Nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className={page === item.id ? "active" : undefined}
                onClick={() => goToPage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="search" role="search" aria-label="Search (visual placeholder)">
            ⌕ Search platforms, concepts, use cases…
          </div>
        </header>

        <section className={`page${page === "p1" ? " active" : ""}`} id="p1">
          <div className="hero">
            <h1>A modern, flexible architecture for customer engagement</h1>
            <div className="lead">
              Explore one representative modern composable customer engagement stack and see how specialist
              platforms can work together across the lifecycle. The products shown are examples of each capability
              — not a prescribed stack or a complete list of CRM and MarTech tools.
            </div>
          </div>
          <ArchitectureDiagram />
          <PersonalisationLoop />
          <div className="infoGrid">
            <div className="panel">
              <h3>What the connectors mean</h3>
              <p>
                Every arrow represents a specific movement of customer data, an audience, a decision or an outbound
                experience. Shared rails show one platform distributing to several destinations without creating a
                tangle of independent lines.
              </p>
            </div>
            <div className="panel">
              <h3>Architecture principle</h3>
              <p>
                Centralise customer data, keep transformation reusable, add intelligence as a service, then activate
                through specialised engagement tools.
              </p>
            </div>
          </div>
        </section>

        <section className={`page${page === "p3" ? " active" : ""}`} id="p3">
          <div className="hero">
            <h1>Explore the CRM & MarTech ecosystem</h1>
            <div className="lead">
              Understand the capability first, then explore representative platforms that can fulfil it. The studio
              uses selected products to make architectures concrete — it does not prescribe a single vendor stack.
            </div>
          </div>
          <div className="ecosystemNotice panel">
            <b>Architecture pattern ≠ vendor prescription</b>
            <span>
              Each category can be implemented with different technologies depending on company size, existing
              investments, data maturity, engineering capability and use case.
            </span>
          </div>
          <div className="techLayout">
            <div className="techList" id="techList">
              {techCategories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  className={`techBtn${techKey === category.key ? " on" : ""}`}
                  data-tech={category.key}
                  onClick={() => setTechKey(category.key)}
                >
                  <b>{category.listLabel}</b>
                  <span>{category.listHint}</span>
                </button>
              ))}
            </div>
            <div className="techDetail">
              <div className="panel bigTech">
                <div className="bigIcon cyan">{tech.icon}</div>
                <div className="kicker">CAPABILITY CATEGORY</div>
                <h2>{tech.name}</h2>
                <p>{tech.copy}</p>
                <div className="examplePlatform">
                  <span>EXAMPLE IN AN ARCHITECTURE</span>
                  <b>{tech.examplePlatform}</b>
                </div>
                <h3>Representative platforms</h3>
                <div className="altChips">
                  {tech.alternatives.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
                <div className="routeText">
                  Typical inbound: {tech.inbound}
                  <br />
                  <br />
                  Typical outbound: {tech.outbound}
                </div>
              </div>
              <div className="panel categoryLearn">
                <div className="kicker">WHY THIS CATEGORY EXISTS</div>
                <h2>{tech.question}</h2>
                <p>{tech.role}</p>
                <div className="categoryGrid">
                  <div>
                    <b>Architecture role</b>
                    <span>{tech.archRole}</span>
                  </div>
                  <div>
                    <b>Common data</b>
                    <span>{tech.commonData}</span>
                  </div>
                  <div>
                    <b>Selection depends on</b>
                    <span>{tech.selection}</span>
                  </div>
                  <div>
                    <b>Connects with</b>
                    <span>{tech.connects}</span>
                  </div>
                </div>
                <div className="principle">
                  <b>Studio principle</b>
                  <span>
                    Learn the architectural responsibility first. Vendor products are examples of how that
                    responsibility can be implemented.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`page${page === "p4" ? " active" : ""}`} id="p4">
          <div className="hero">
            <h1>See the architecture working</h1>
            <div className="lead">
              Follow a customer through one example implementation of a modern composable engagement stack. The
              journey demonstrates architectural responsibilities; the named platforms can be substituted with
              other technologies in the same categories.
            </div>
          </div>
          <div className="journeyTop">
            {journeyScenarios.map((label, index) => (
              <button
                key={label}
                type="button"
                className={`pill${scenarioIndex === index ? " on" : ""}`}
                onClick={() => {
                  setScenarioIndex(index);
                  if (index === 0) setJourneyIndex(0);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="timeline" id="timeline">
            {journeySteps.map((step, index) => (
              <button
                key={step.kicker}
                type="button"
                className={`jstep${journeyIndex === index ? " on" : ""}`}
                onClick={() => setJourneyIndex(index)}
                disabled={scenarioIndex !== 0}
              >
                <b>{String(index + 1).padStart(2, "0")}</b>
                {step.timelineLabel}
              </button>
            ))}
          </div>
          <div className="journeyGrid">
            <div className="diagram journeyRoute">
              <div className="jrNodes">
                {[
                  ["◎ Website", "Signup", "violet"],
                  ["❄ Snowflake", "Profile", "cyan"],
                  ["✦ AI", "Decision", "violet"],
                  ["◇ Hightouch", "Audience", "green"],
                  ["◉ Braze", "Journey", "pink"],
                  ["✉ Email", "Experience", "cyan"],
                ].map(([title, sub, color]) => (
                  <div key={title} className={`jrNode ${color}`}>
                    <b>{title}</b>
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
              <svg className="svgmap" viewBox="0 0 1000 340" aria-hidden>
                <defs>
                  <marker id="las-jarr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0 0L7 3.5L0 7Z" fill="#22d3ee" />
                  </marker>
                </defs>
                <path className="route" stroke="#9b6cff" d="M135 170H245" markerEnd="url(#las-jarr)" />
                <path className="route" stroke="#22d3ee" d="M305 170H415" markerEnd="url(#las-jarr)" />
                <path className="route" stroke="#9b6cff" d="M475 170H585" markerEnd="url(#las-jarr)" />
                <path className="route" stroke="#42e8a5" d="M645 170H755" markerEnd="url(#las-jarr)" />
                <path className="route" stroke="#d76cff" d="M815 170H925" markerEnd="url(#las-jarr)" />
              </svg>
            </div>
            <div className="panel">
              <div className="kicker">{journey.kicker}</div>
              <h2>{journey.title}</h2>
              <p>{journey.copy}</p>
              <div className="routeText">
                {journey.metaLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
              <h3>Behind the scenes</h3>
              <p>{journey.behind}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
