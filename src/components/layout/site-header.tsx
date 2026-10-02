import { site } from "@/lib/site";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteSlateBand } from "@/components/layout/site-slate-band";

export function SiteHeader() {
  return (
    <div className="site-header">
      <div className="site-header__edge site-header__edge--start" aria-hidden="true" />
      <div className="site-header__core">
        <div className="site-header__spectrum" aria-hidden="true" />
        <SiteSlateBand className="site-slate-band--chrome">
          <div className="site-container site-slate-band__inner">
            <p className="site-slate-band__label">{site.label}</p>
            <a className="site-slate-band__contact" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </SiteSlateBand>
        <SiteNav />
      </div>
      <div className="site-header__edge site-header__edge--end" aria-hidden="true">
        <span className="site-header__edge-rule" aria-hidden="true" />
      </div>
    </div>
  );
}
