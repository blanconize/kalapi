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
			teko: ["Teko, sans-serif"]
		},
		extend: {
			colors: {
				red: {
					"50": "#fb3249",
					"100": "#f1283f",
					"200": "#e71e35",
					"300": "#dd142b",
					"400": "#d30a21",
					"500": "#c90017",
					"600": "#bf000d",
					"700": "#b50003",
					"800": "#ab0000",
					"900": "#a10000"
				}
			},
			letterSpacing: {
				"1": "0.25px",
				"2": "0.5px",
				"3": ".75px",
				"4": "1px",
				"5": "1.25px"
			},
			maxWidth: {
				"8xl": "90rem",
				"9xl": "100rem",
				"10xl": "110rem"
			}
		}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")]
};
