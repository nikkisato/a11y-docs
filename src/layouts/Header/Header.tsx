import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
	return (
		<>
			<header className={styles.headerContainer}>
				<div className={styles.headerLeftMenu}>
					<MenuIcon className="icon" />
				</div>
				<div className={styles.headerMiddle}></div>
				<div className={styles.headerRightMenu}>
					<MenuIcon className="icon" />
				</div>
			</header>
		</>
	);
}
