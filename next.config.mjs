/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "https://res.cloudinary.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
