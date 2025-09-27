import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL('https://place-hold.it/**'),
        ],
    },
};

export default nextConfig;
