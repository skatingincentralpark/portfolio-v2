/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.are.na",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // A static PDF can't carry a robots meta tag, so send the header instead.
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/resume", destination: "/resume.pdf", permanent: false },
      { source: "/cv", destination: "/resume.pdf", permanent: false },
      { source: "/Charles-Zhao-CV.pdf", destination: "/resume.pdf", permanent: false },
    ];
  },
};

module.exports = nextConfig;
