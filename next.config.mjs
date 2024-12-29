/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "i.ibb"
            },
        ],
        minimumCacheTTL:1500000,
    },
};

export default nextConfig;
