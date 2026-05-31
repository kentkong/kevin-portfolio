import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { thinkingPosts } from "@/lib/thinking";

export default function ThinkingPage() {
  return (
    <>
      <SiteNav />
      <main className="site-page">
        <div className="site-container site-page__inner">
          <p className="site-label">Thinking</p>
          <h1 className="site-page__title">Strategy, ops, and AI product design</h1>
          <p className="site-page__lead">
            Essays on operational intelligence, lifecycle marketing, and building with AI.
          </p>
          <div className="thinking-grid">
            {thinkingPosts.map((post) => (
              <article key={post.slug} className="thinking-card">
                <p className="thinking-card__meta">{post.readTime}</p>
                <h2 className="thinking-card__title">{post.title}</h2>
                <p className="thinking-card__excerpt">{post.excerpt}</p>
                <Link href={`/thinking/${post.slug}`} className="thinking-card__link">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
