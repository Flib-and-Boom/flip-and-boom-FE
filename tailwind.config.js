/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				spinX: "spinX 2000ms infinite linear",
				lumayan: "lumayan 888ms infinite ease-in-out",
				lumayan2: "lumayan2 888ms infinite ease-in-out",
				lumayan3: "lumayan3 1888ms infinite ease-in-out",
				lumayan4: "lumayan4 1888ms infinite ease-in-out",
				attackBomb: "attackBomb 2789ms linear",
        attackBombSelf: "attackBombSelf 2789ms linear"
			},
			keyframes: {
				attackBomb: {
					"20%": { transform: "translateX(14.4cqw) rotate(180deg) scale(1.5)" },
					"40%": { transform: "translateX(28.8cqw) rotate(360deg) scale(2)" },
					"50%": { transform: "translateX(36cqw) rotate(440deg) scale(2.25)" },
					"60%": { transform: "translateX(43.2cqw) rotate(520deg) scale(2)" },
					"80%": {
						transform: "translateX(56.4cqw) rotate(700deg) scale(1.5)",
					},
          "100%": {
						transform: "translateX(72cqw) rotate(880deg) scale(1)",
					},
				},
				attackBombSelf: {
					"20%": {
						transform: "translateX(-14.4cqw) rotate(-180deg) scale(1.5)",
					},
					"40%": { transform: "translateX(-28.8cqw) rotate(-360deg) scale(2)" },
					"50%": {
						transform: "translateX(-36cqw) rotate(-440deg) scale(2.25)",
					},
					"60%": { transform: "translateX(-43.2cqw) rotate(-520deg) scale(2)" },
					"80%": {
						transform: "translateX(-56.4cqw) rotate(-700deg) scale(1.5)",
					},
					"100%": {
						transform: "translateX(-72cqw) rotate(-880deg) scale(1)",
					},
				},
				spinX: {
					"100%": {
						transform: "rotateX(360deg)",
					},
				},
				lumayan: {
					"50%": {
						"outline-color": "#5e986f",
						"outline-offset": "4px",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
				lumayan2: {
					"50%": {
						"outline-color": "rgb(202 138 4)",
						"outline-offset": "4px",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
				lumayan3: {
					"50%": {
						"outline-color": "#5e986f",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
				lumayan4: {
					"50%": {
						"outline-color": "rgb(202 138 4)",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
			},
		},
		fontFamily: {
			basefont: ["Roboto", "sans-serif"],
			basefonttitle: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
};
