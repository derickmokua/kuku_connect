import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com https://*.firebaseio.com https://*.firebaseapp.com https://www.gstatic.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com https://firebasestorage.googleapis.com https://*.googleapis.com https://*.appspot.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    connect-src 'self' https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://firebasestorage.googleapis.com https://*.appspot.com;
`

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-*/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.appspot.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/assistant',
        destination: '/?assistant=true',
        permanent: false,
      },
      {
        source: '/Ai_assisitant',
        destination: '/?assistant=true',
        permanent: false,
      },
      {
        source: '/Ai_assistant',
        destination: '/?assistant=true',
        permanent: false,
      },
      {
        source: '/ai-assistant',
        destination: '/?assistant=true',
        permanent: false,
      },
      // Orders live on the FMS public form — no cart on marketing site
      {
        source: '/checkout',
        destination: 'https://app.kukuconnect.co.ke/order',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
