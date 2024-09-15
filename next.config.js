// next.config.js
const nextConfig = {
    // Enables React Strict Mode, which helps identify potential problems in an application
    reactStrictMode: true,
  
    // Enables SWC minifier for faster builds
    swcMinify: true,
  
    // Environment variables that can be used in the Next.js app
    env: {
      CUSTOM_VAR: process.env.CUSTOM_VAR, // Example environment variable
    },
  
    // Configuration for handling images
    images: {
      domains: ['example.com'], // Replace with your own domains for external images
    },
  
    // If you have a custom build directory, specify it here
    // distDir: 'build',
  
    // Example Webpack configuration customization
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Further custom configuration here
      return config;
    },
  
    // Redirects configuration example
    async redirects() {
      return [
        {
          source: '/old-page',
          destination: '/new-page',
          permanent: true, // 301 redirect
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  