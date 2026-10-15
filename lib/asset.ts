const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Prefixes a /public path with the deploy base path (needed because images are unoptimized). */
export function asset(path: string) {
  return `${basePath}${path}`
}
