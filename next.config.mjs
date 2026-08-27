/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/kalamanch-v2',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
}

export default nextConfig