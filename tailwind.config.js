module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primary: {
				DEFAULT: "#2F57E4",
				dark: "#5B2A82",
				light: "#915ABD",
			},
			accent: {
				DEFAULT: "#120081",
				dark: "#125A9D",
				light: "#60A7EA",
			},
			highlight: {
				green: "#00FF57",
				red: "#E23535",
			},
			white: "#FAFAFA",
			gray: "#404040",
			black: "#000000",
		},
	},
	extend: {
		FontFamily: {
			sans: ["sans-serif"],
			PressStart2P: ["PressStart2P"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
