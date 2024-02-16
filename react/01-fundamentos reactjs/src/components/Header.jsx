import igniteLogo from "../assets/ignite-logo.svg";
import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<strong>
				<img src={igniteLogo} alt="Ignite logo" />
			</strong>
		</header>
	);
}
