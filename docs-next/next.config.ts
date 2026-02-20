import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Next.js 16: Turbopack config moved to top level (no longer under experimental)
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Turbopack configuration at top level for Next.js 16
  turbopack: {
    // Turbopack options here
  },
};

export default withNextIntl(nextConfig);
