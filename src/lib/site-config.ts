/** Base path when hosted at kentkong.github.io/kevin-portfolio */
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_PAGES === "true" || process.env.NEXT_PUBLIC_GITHUB_PAGES === "true"
    ? "/kevin-portfolio"
    : "");

export const isGithubPages =
  process.env.GITHUB_PAGES === "true" || process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
