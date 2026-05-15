/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence Turbopack warning since webpack config is only for fallbacks
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/lifinance/types/main/src/assets/icons/chains/**",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },
    ],
    // Optimize images for better performance and quality
    formats: ['image/webp'], // WebP with fallback to original format
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
    unoptimized: false, // Enable optimization
    loader: 'default',
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Transpile problematic packages
  transpilePackages: [],

  webpack: (config, { dev, isServer }) => {
    // Fallback configuration for missing modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };
    return config;
  },
};

export default nextConfig;
