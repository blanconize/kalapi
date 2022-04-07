module.exports = {
	content: [
		"./components/**/*.{js,vue}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js}",
		"./nuxt.config.{js}"
	],
	theme: {
		fontFamily: {
			opensans: ["Open Sans"],
			teko: ["Teko"]
		},
		extend: {}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")]
};
