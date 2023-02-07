/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['firebasestorage.googleapis.com','images.unsplash.com','lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
