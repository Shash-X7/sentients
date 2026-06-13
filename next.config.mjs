/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export during production build, not dev
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
