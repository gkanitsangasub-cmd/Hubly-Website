import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/solutions", permanent: true },
      {
        source: "/services/marketing",
        destination: "/services/digital-growth",
        permanent: true,
      },
      {
        source: "/services/ai-solution",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/pricing/marketing",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/pricing/ai-solution",
        destination: "/solutions#project",
        permanent: true,
      },
      { source: "/pricing/saas", destination: "/solutions", permanent: true },
    ];
  },
};
export default nextConfig;
