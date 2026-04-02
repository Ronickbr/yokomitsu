import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'blogaragem.com.br',
      },
      {
        protocol: 'https',
        hostname: 'suaoficinaonline.com.br',
      },
      {
        protocol: 'https',
        hostname: 'garagem360.com.br',
      },
      {
        protocol: 'https',
        hostname: 'ciaauto.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'yokomitsu.pe',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
