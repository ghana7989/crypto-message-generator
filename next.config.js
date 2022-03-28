const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	distDir: 'build',
	assetPrefix: isProd ? '/crypto-message-generator/' : '',
};

module.exports = nextConfig;
