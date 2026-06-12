import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // remove once all images are local in /public/images/
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.heronissoshotel.gr",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
