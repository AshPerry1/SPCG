/** GitHub project Pages serves this repo at https://<user>.github.io/SPCG/ */
export const staticBasePath =
  process.env.GITHUB_PAGES === "true" ? "/SPCG" : "";

/** Prefix paths to files under `public/` for static export. */
export function publicAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${staticBasePath}${normalized}`;
}
