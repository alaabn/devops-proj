/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    productionBrowserSourceMaps: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    transpilePackages: ["utils", "models"],
};

export default nextConfig;
