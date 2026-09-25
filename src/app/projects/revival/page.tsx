import { assetPath } from "@/lib/asset-path";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

const image = (path: string) => assetPath(`/projects/revival/${path}`);

const componentDecisions = [
  ["Tank", "Change"],
  ["Tyres", "Change"],
  ["Bars", "Change"],
  ["Engine", "Locked"],
  ["Frame", "Locked"],
  ["Exhaust", "Keep"],
];

const flowSteps = [
  "Upload motorcycle",
  "Identify motorcycle",
  "Choose direction",
  "Select component",
  "Keep / change / remove / lock",
  "Generate Revival",
  "Original <-> Revival",
  "Create build brief",
];

export default function RevivalVisualExplorationPage() {
  return (
    <>
      <SiteNav />
      <main className="revival-page">
        <section className="revival-hero">
          <div className="revival-shell revival-hero__grid">
            <div className="revival-hero__copy">
              <p className="revival-kicker">UX / Product Design · AI-assisted customisation</p>
              <p className="revival-wordmark">REVIVAL</p>
              <h1>
                Build it
                <br />
                before you
                <br />
                build it.
              </h1>
              <p className="revival-hero__lead">
                Visualise your motorcycle build before you build it. A product concept exploring
                how owners could transform ideas, references and component choices into a coherent
                visual motorcycle design and workshop-ready brief.
              </p>
              <dl className="revival-meta">
                <div>
                  <dt>Status</dt>
                  <dd>Concept in development</dd>
                </div>
                <div>
                  <dt>Principle</dt>
                  <dd>AI suggests. The rider decides.</dd>
                </div>
              </dl>
            </div>

            <figure className="revival-hero__visual">
              <div
                className="revival-photo revival-photo--hero"
                role="img"
                aria-label="Classic Triumph motorcycle reference for Revival visual direction"
                style={{ backgroundImage: `url(${image("reference-black-triumph.png")})` }}
              />
              <figcaption>Supplied Triumph reference / licensing to verify</figcaption>
            </figure>
          </div>
        </section>

        <section className="revival-archive" aria-labelledby="revival-context-title">
          <div className="revival-shell revival-archive__grid">
            <div>
              <p className="revival-chapter">Historical / creative context</p>
              <h2 id="revival-context-title">
                Old soul.
                <br />
                New tools.
              </h2>
            </div>

            <div className="revival-archive__statement">
              <p>
                Inspired by 1960s California desert racing, classic Triumphs, functional
                competition motorcycles and period workshop graphics.
              </p>
              <p className="revival-note">Reference direction only. Historical claims and image licensing to verify.</p>
            </div>

            <figure className="revival-archive__image">
              <div
                className="revival-photo"
                role="img"
                aria-label="Vintage custom motorcycle reference image"
                style={{ backgroundImage: `url(${image("reference-board-track-indian.jpg")})` }}
              />
              <figcaption>Reference / licensing to verify</figcaption>
            </figure>

            <div className="revival-archive__type">
              <span>California</span>
              <strong>1960s</strong>
              <span>Built for the desert</span>
            </div>
          </div>
        </section>

        <section className="revival-dna" aria-labelledby="revival-dna-title">
          <div className="revival-shell">
            <div className="revival-section-heading">
              <p className="revival-chapter">Design DNA</p>
              <h2 id="revival-dna-title">
                1960s California
                <br />
                desert sled DNA.
              </h2>
            </div>

            <div className="revival-dna__layout">
              <figure className="revival-dna__image">
                <div
                  className="revival-photo"
                  role="img"
                  aria-label="Mint green custom Triumph reference"
                  style={{ backgroundImage: `url(${image("reference-mint-triumph.webp")})` }}
                />
                <figcaption>Custom Triumph reference / licensing to verify</figcaption>
              </figure>

              <ul className="revival-dna__list">
                {[
                  "Minimal bodywork",
                  "Period tank proportion",
                  "High or wide handlebars",
                  "Desert / trials tyres",
                  "Functional mudguards",
                  "Black frame",
                  "Exposed mechanical components",
                  "Race-number details",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="revival-origin" aria-labelledby="revival-origin-title">
          <div className="revival-shell revival-origin__grid">
            <div className="revival-origin__copy">
              <p className="revival-chapter">Personal origin / problem</p>
              <h2 id="revival-origin-title">
                It started
                <br />
                with a motorcycle.
              </h2>
              <p>
                While exploring how to modify a classic Triumph, individual motorcycles,
                components and styles were easy to find. Understanding how those decisions would
                work together on one motorcycle was much harder.
              </p>
              <p>
                Early mock-ups helped, but each new combination required another manual iteration.
                That raised the product question:
              </p>
              <blockquote>What if the motorcycle became the interface?</blockquote>
            </div>

            <figure className="revival-origin__visual">
              <div
                className="revival-photo"
                role="img"
                aria-label="Earlier as-is and proposed scrambler visualisation"
                style={{ backgroundImage: `url(${image("process-as-is-proposed.png")})` }}
              />
              <figcaption>Supplied process material: manual as-is / proposed visualisation</figcaption>
            </figure>
          </div>
        </section>

        <section className="revival-interface" aria-labelledby="revival-interface-title">
          <div className="revival-shell">
            <div className="revival-interface__intro">
              <p className="revival-chapter">Product idea</p>
              <h2 id="revival-interface-title">
                The motorcycle
                <br />
                is the interface.
              </h2>
              <p>
                Revival should not begin as a generic prompt box. The rider selects real parts of
                the motorcycle, chooses what to keep or change, then lets AI visualise those
                explicit decisions.
              </p>
            </div>

            <ol className="revival-flow">
              {flowSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="revival-product" aria-labelledby="revival-product-title">
          <div className="revival-shell">
            <div className="revival-product__heading">
              <p className="revival-chapter">Concept screen / visual exploration only</p>
              <h2 id="revival-product-title">Select a part to begin.</h2>
            </div>

            <div className="revival-product-screen" aria-label="Conceptual Revival component selection screen">
              <div className="revival-product-screen__topbar">
                <span>REVIVAL</span>
                <span>My motorcycle</span>
              </div>

              <div className="revival-product-screen__canvas">
                <div
                  className="revival-photo revival-photo--product"
                  role="img"
                  aria-label="Starting Triumph motorcycle used as visual canvas concept"
                  style={{ backgroundImage: `url(${image("source-triumph-starting-point.webp")})` }}
                />
                <span className="revival-hotspot revival-hotspot--tank">Tank</span>
                <span className="revival-hotspot revival-hotspot--seat">Seat</span>
                <span className="revival-hotspot revival-hotspot--tyre">Tyres</span>
                <span className="revival-hotspot revival-hotspot--engine">Engine locked</span>
              </div>

              <aside className="revival-product-panel">
                <p className="revival-product-panel__eyebrow">Selected component</p>
                <h3>Tank</h3>
                <div className="revival-actions">
                  <button type="button">Keep</button>
                  <button type="button" className="revival-actions__active">
                    Change
                  </button>
                  <button type="button">Lock</button>
                </div>
                <div className="revival-product-panel__group">
                  <span>Style</span>
                  <p>Desert / competition tank direction</p>
                </div>
                <div className="revival-product-panel__group">
                  <span>Build</span>
                  <ul>
                    {componentDecisions.map(([component, decision]) => (
                      <li key={component}>
                        <span>{component}</span>
                        <strong>{decision}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
                <button type="button" className="revival-generate">
                  Generate Revival
                </button>
              </aside>
            </div>

            <p className="revival-product__note">
              This screen is a visual direction prototype only. No component detection,
              compatibility data, workshop feasibility, or AI generation is implemented here.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
