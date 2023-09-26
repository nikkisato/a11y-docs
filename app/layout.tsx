import Head from 'next/head';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head>
				<title>Create Next App</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<body>
				<header>
					<h1>HELLO</h1>
				</header>
				{children}
				<footer>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by{' '}
						<span>
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								width={72}
								height={16}
							/>
						</span>
					</a>
				</footer>
			</body>
		</html>
	);
}
