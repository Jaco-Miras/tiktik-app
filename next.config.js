/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["scontent.fdvo4-1.fna.fbcdn.net", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
