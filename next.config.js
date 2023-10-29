/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
  }
};

module.exports = nextConfig;
