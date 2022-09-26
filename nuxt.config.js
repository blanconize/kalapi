export default {
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "KALAPI - Oldschool war Gestern - Kein Bock auf Nazis!",
		htmlAttrs: {
			lang: "en"
		},
		bodyAttrs: {
			class: "font-teko"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "KALAPI - Oldschool war Gestern - Kein Bock auf Nazis!"
			},
			{ name: "format-detection", content: "telephone=no" }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/main.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
		"@nuxtjs/svg",
		"@nuxt/postcss8",
		"@nuxtjs/composition-api/module"
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@vueuse/nuxt", "@nuxt/image", "@nuxt/content"],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {}
			}
		}
	}
};
