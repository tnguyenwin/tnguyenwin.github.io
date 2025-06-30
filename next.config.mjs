/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    reactStrictMode: false,
    transpilePackages: ['three'],
    output: 'export',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
