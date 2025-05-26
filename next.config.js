const path = require('path');
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "static.vecteezy.com",
      "freerangestock.com",
      "cdn.pixabay.com",
      "st4.depositphotos.com",
      "i.pinimg.com",
      "thumbs.dreamstime.com",
      "c8.alamy.com",
      "img.freepik.com",
      "media.istockphoto.com",
      "image.shutterstock.com",
      "images.pexels.com"
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};
module.exports = nextConfig;
