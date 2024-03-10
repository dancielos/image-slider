import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';
// import "./globals.css";
const chakraFont = Chakra_Petch({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Image Slider by Dan',
	description: 'A sample image slider created by Dan.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={chakraFont.className}
				style={{
					backgroundColor: '#0b0c10',
				}}
			>
				{children}
			</body>
		</html>
	);
}
