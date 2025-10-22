export default {
  reactStrictMode: true,

  experimental: { appDir: true },

  output: 'export',

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};
