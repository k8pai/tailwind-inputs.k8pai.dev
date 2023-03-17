/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/@k8pai/tailwind-inputs/**/*.js',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle .5s ease-in-out 1',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(0deg)',
						// transform: '',
					},
					'25%, 75%': {
						transform: 'rotate(-10deg)',
					},
					'50%': {
						transform: 'rotate(15deg)',
						// transform: 'scale(1.5)',
					},
				},
			},
			fontFamily: {
				// prettier-ignore
				"montez": ['Montez', 'cursive'],
			},
		},
	},
	plugins: [],
};
