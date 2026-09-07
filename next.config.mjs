import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Case studies: every /portfolio/:slug must resolve to a real page (see CASE_STUDY_AUDIT.md).
  async redirects() {
    return [
      {
        source: '/portfolio/:slug',
        destination: '/case-studies/:slug',
        permanent: true,
      },
      {
        source: '/case-studies/chez-amis',
        destination: '/work',
        permanent: true,
      },
      // Named client case studies retired under confidential posture.
      {
        source: '/case-studies/extreme-dept-kidz',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/case-studies/hunnid-official',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/case-studies/velora',
        destination: '/work',
        permanent: true,
      },
      // RFC 9116: root security.txt is a legacy location; canonical is /.well-known.
      {
        source: '/security.txt',
        destination: '/.well-known/security.txt',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Enable image optimization
    unoptimized: false,
    // Remote image domains (add as needed)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Production optimizations
  productionBrowserSourceMaps: false,
  // Enable source maps for better debugging (optional, can disable in production)
  // productionBrowserSourceMaps: true, // Uncomment if needed for debugging
  // Note: output: 'standalone' is for Docker deployments, comment out if not needed
  // output: 'standalone',
  // Optimize fonts
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize bundle splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for large libraries
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },
            lucideReact: {
              name: 'lucide-react',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },
            // Common vendor chunk
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
              reuseExistingChunk: true,
            },
            // Common chunk for shared components
            common: {
              name: 'common',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Headers for caching and performance
  async headers() {
    // Dev-mode webpack wraps modules in eval() (eval-source-map). Without
    // 'unsafe-eval' the CSP blocks every module and the site never hydrates
    // locally. Production bundles do not use eval, so it stays off there.
    const isDev = process.env.NODE_ENV !== 'production';
    const scriptSrc = [
      "'self'",
      "'unsafe-inline'",
      isDev ? "'unsafe-eval'" : null,
      'https://www.googletagmanager.com',
      'https://challenges.cloudflare.com',
    ]
      .filter(Boolean)
      .join(' ');

    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      `script-src ${scriptSrc}`,
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://api.emailjs.com https://challenges.cloudflare.com",
      "frame-src 'self' https://challenges.cloudflare.com",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        // Static assets (JS, CSS, images) - can cache longer
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Images - cache for 1 year
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Fonts - cache for 1 year
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        // HTML pages - short cache, allow revalidation
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

let config = nextConfig;
if (process.env.ANALYZE === 'true') {
  try {
    const bundleAnalyzer = require('@next/bundle-analyzer');
    const wrap = bundleAnalyzer.default ?? bundleAnalyzer;
    config = wrap({ enabled: true })(nextConfig);
  } catch (e) {
    console.warn('Bundle analyzer not installed. Run: npm install --save-dev @next/bundle-analyzer');
  }
}

export default config;

