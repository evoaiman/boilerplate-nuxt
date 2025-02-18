// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
				{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
				{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
				{ rel: "manifest", href: "/site.webmanifest" },
			],
			htmlAttrs: {
				lang: "en",
			},
			charset: "utf-8",
		},
		rootId: "bateriku",
		rootTag: "div",
		teleportId: false,
		buildAssetsDir: "/_bateriku/",
	},

	compatibilityDate: "2024-11-01",

	// devtool for local
	...(process.env.ENV_TYPE === "development" && {
		devtools: { enabled: true },
	}),

	// nuxt compatible v4
	future: {
		compatibilityVersion: 4,
	},

	// module nuxt
	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n", "nuxt-svgo", "@nuxtjs/google-fonts", "@nuxt/image"],

	// font config global
	googleFonts: {
		display: "swap",
		outputDir: "./app/assets",
		stylePath: "css/fonts.css",
		families: {
			Inter: [200, 300, 400, 500, 600],
		},
	},

	// tailwindcss config global
	tailwindcss: {
		cssPath: ["~/assets/css/main.css", { injectPosition: "first" }],
		configPath: "./tailwind.config",
		...(process.env.ENV_TYPE === "development" && {
			disableHMR: true,
			viewer: true,
		}),
	},

	// language config global
	i18n: {
		vueI18n: "./i18n.config.ts",
		locales: [
			{ code: "en", file: "en.json", name: "English" },
			{ code: "ms", file: "ms.json", name: "Bahasa" },
			{ code: "id", file: "id.json", name: "Indonesian" },
		],
		langDir: "../app/assets/lang",
		lazy: false,
		defaultLocale: "en",
		strategy: "no_prefix",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "language",
			cookieSecure: true,
			redirectOn: "root",
		},
	},

	// svg config global
	svgo: {
		autoImportPath: "~/assets/svg",
		componentPrefix: "svg",
	},
});