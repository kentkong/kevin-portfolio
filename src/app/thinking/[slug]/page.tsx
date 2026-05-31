import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { thinkingPosts } from "@/lib/thinking";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return thinkingPosts.map((post) => ({ slug: post.slug }));
}

export default async function ThinkingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = thinkingPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <SiteNav />
      <main className="site-page">
        <div className="site-container site-page__inner">
          <Link href="/thinking" className="site-back-link">
            ← Back to Thinking
          </Link>
          <p className="site-label">{post.readTime}</p>
          <h1 className="site-page__title">{post.title}</h1>
          <div className="site-prose">
            <p>{post.excerpt}</p>
            <p>
              Full article coming soon. This placeholder captures the strategic angle—expand with
              your voice, examples from Gen Pulse, PulseOps AI, and SprintIQ, and leadership lessons
              from 20+ years in lifecycle marketing.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
