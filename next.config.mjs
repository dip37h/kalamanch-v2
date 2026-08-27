/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/kalamanch-v2',

  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig