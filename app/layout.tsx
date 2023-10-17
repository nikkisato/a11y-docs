import '../styles/reset.css';
import '../styles/global.css';
import Container from '../src/components/Container/Container';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Content from 'src/components/Content/Content';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Container>
					<Sidebar />
					<Content>{children}</Content>
				</Container>
			</body>
		</html>
	);
}
