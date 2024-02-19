import styles from "./avatar.module.css";

export function Avatar({ hasBorder = false, src }) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
			alt="Foto do usuário"
		/>
	);
}
