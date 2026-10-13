import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
// New site lives in /complete on the existing kentkong/kevin-portfolio Pages project.
const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/kevin-portfolio/complete";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? pagesBasePath : "",
  assetPrefix: isGithubPages ? `${pagesBasePath}/` : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
