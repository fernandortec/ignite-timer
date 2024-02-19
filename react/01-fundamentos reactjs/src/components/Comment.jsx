import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./comment.module.css";
import { Avatar } from "./Avatar";
export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/fernandortec.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Fernando Rodrigues</strong>
							<time
								title="11 de maio as 8h13min"
								dateTime="2024-05-11 08:13:30"
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário" type="button">
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏👏</p>
				</div>

				<footer>
					<button type="button">
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
