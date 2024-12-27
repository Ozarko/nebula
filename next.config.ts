import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // nextjs tested this library in the experimental phase
      // https://nextjs.org/docs/app/api-reference/config/next-config-js/turbo#supported-loaders
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
