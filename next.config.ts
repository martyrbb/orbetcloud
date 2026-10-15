import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/bot-hosting", destination: "/pricing", permanent: true },
      { source: "/game-servers", destination: "/platform/online-bookings", permanent: true },
      { source: "/root-servers", destination: "/platform/venue-manager", permanent: true },
      { source: "/dedicated-servers", destination: "/platform/orbetkds", permanent: true },
      { source: "/web-hosing", destination: "/platform/orbetpay", permanent: true },
      { source: "/explore", destination: "/platform", permanent: true },
      { source: "/get-started", destination: "https://orbet.co.uk/signup/", permanent: false },
    ];
  },
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
};
export default nextConfig;
