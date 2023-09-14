/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/fonts/headline.woff2',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, mac-age=31536000, immutable',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
