/** New site: kentkong.github.io/kevin-portfolio/complete/
 *  Previous portfolio stays at kentkong.github.io/kevin-portfolio/ */
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_PAGES === "true" || process.env.NEXT_PUBLIC_GITHUB_PAGES === "true"
    ? "/kevin-portfolio/complete"
    : "");

export const isGithubPages =
  process.env.GITHUB_PAGES === "true" || process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
