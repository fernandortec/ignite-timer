import { PencilLine } from "@phosphor-icons/react";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Profile cover"
			/>

			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://github.com/fernandortec.png"
					alt="Foto do usuário"
				/>
				<strong>Fernando Rodrigues</strong>
				<span>Web developer</span>
			</div>

			<footer>
				<a href="nourl">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
};
