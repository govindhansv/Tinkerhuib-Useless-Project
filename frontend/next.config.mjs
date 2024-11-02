/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.tenor.com'], // Add other domains if needed
  },
  output: 'export',
  images: { unoptimized: true }
};

export default nextConfig;
