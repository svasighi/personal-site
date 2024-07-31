import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/sections/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	safelist: ['bg-grid', 'bg-side-bottom'],
	theme: {
		screens: { sm: '480px', md: '768px', lg: '1200px', xl: '1440px' },
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Inter', ...defaultTheme.fontFamily.serif],
				headline: ['headline'],
			},
			keyframes: {
				updown: {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(20px)' },
					'100%': { transform: 'translateY(0px)' },
				},
			},
			animation: {
				updown: 'updown 5s ease-in-out infinite',
			},
			backgroundImage: {
				grid: "url('/bg-grid.svg')",
				'side-bottom': "url('/side-bottom.svg')",
			},
		},
	},
	plugins: [],
};
export default config;
