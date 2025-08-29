/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    reactStrictMode: false,
    output: 'export',
    transpilePackages: ['three'],
    images: {
        unoptimized: true
    },
    experimental: {
        workerThreads: false,
        cpus: 1
    }
};

export default nextConfig;
