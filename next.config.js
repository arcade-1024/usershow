/** @type {import('next').NextConfig} */
module.exports = {
	async() {
		redirects: [
			{
				source: "/",
				destination: "/user",
				permanent: true,
			},
		];
	},
};
