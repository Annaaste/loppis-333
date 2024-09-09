/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure the app is exported as static HTML
  distDir: 'docs',  // Set export directory to /docs
  images: {
    unoptimized: true, // Disable image optimization
  },
  experimental: {
    // Detta kan behövas för att korrekt hantera CSS och SCSS
    scss: true,
  },
};

export default nextConfig;
