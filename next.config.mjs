/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from /kalamanch-v2; local dev and previews serve from root.
const basePath = process.env.NODE_ENV === 'production' ? '/kalamanch-v2' : ''

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
