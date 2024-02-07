/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      unoptimized: true,
    },
    distDir: 'dist',
    output: 'export'
  }

module.exports = nextConfig
