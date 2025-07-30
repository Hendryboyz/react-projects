/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '127.0.0.1',
        port: 'random-access-henrychou.s3.ap-northeast-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
