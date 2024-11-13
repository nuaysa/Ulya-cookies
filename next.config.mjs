/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  domains: ['randomuser.me'],
  
  remotePatterns:[
    {
        hostname: "images.ctfassets.net"
    },
]
  },
};

export default nextConfig;