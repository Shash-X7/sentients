/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path only needed if NOT using custom domain.
  // Since sentients.in is a custom domain, leave basePath empty.
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
