/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			flexBasis: {
				'1/2-gap': 'calc(50% - 0.315rem)',
				'1/2-gap-sm': 'calc(45% - 1rem)',
				'1/4-gap': 'calc(24% - 0.212rem)',
			},
		},
	},
	plugins: [],
};
