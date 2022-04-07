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
		extend: {
			letterSpacing: {
				"1": "0.25px",
				"2": "0.5px",
				"3": ".75px",
				"4": "1px",
				"5": "1.25px"
			}
		}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")]
};
