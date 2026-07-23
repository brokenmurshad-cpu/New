/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
