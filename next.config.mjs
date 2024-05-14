/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },
}

export default config
