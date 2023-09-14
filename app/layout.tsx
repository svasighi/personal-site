import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title:
		'Shadmehr Vasighi - Front-End Developer specializing in React and Next.js',
	description:
		'Shadmehr Vasighi, a Front-End Developer with expertise in building websites using React and Next.js. With a focus on TypeScript and visual interface design, I am ready to collaborate on high-performance website development projects with excellent user experience.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='preload'
					href='/fonts/headline.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
