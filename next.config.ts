import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: "2mb",
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s3dev.pjc.mt.gov.br",
			},
		],
	},
};

export default nextConfig;
