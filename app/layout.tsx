import '../styles/reset.css';
import '../styles/global.css';
import '../styles/icon.css';
import Container from '../src/components/Container/Container';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Content from 'src/components/Content/Content';
import Header from '../src/layouts/Header/Header';
import Footer from '../src/layouts/Footer/Footer';

// TODO: ASK CHRIS IF SIDEBAR CAN ONLY BE ON MOBILE??

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Container>
					<Header />
					{/* <Sidebar /> */}
					<Content>{children}</Content>
					<Footer />
				</Container>
			</body>
		</html>
	);
}
