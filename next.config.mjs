/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'favim.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      // Add any other domains you need
    ],
  },
};

export default nextConfig;
