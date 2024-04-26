/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,jsx,ts,tsx,js}"],
	theme: {
		extend: {
			spacing: {
				"sidebar": "250px",
			},
			animation: {
				"swipe-in": "swipe-in 0.3s forwards",
				"swipe-out": "swipe-out 0.3s forwards",
			},
			keyframes: {
				"swipe-in": {
					"0%": {
						transform: "translateX(-100%)",
					},
					"100%": {
						transform: "translateX(0)",
					},
				},
				"swipe-out": {
					"0%": {
						transform: "translateX(0)",
					},
					"100%": {
						transform: "translateX(-100%)",
					},
				},
			},
		},
	},
	plugins: [],
}
