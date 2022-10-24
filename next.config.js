/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}
const images = {
  domains: ['cdn.sanity.io', "avatars.githubusercontent.com"],
}
module.exports = { nextConfig, images }
