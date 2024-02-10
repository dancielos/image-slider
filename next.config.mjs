import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image-slider-sample.s3.ca-central-1.amazonaws.com',
				port: '',
			},
		],
	},
};

export default nextConfig;
