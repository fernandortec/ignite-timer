import styles from "./post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						classname={styles.avatar}
						src="https://github.com/fernandortec.png"
						alt="Profile"
					/>
					<div className={styles.authorInfo}>
						<strong>Fernando Rodrigues</strong>
						<span>Web developer</span>
					</div>
				</div>

				<time title="11 de maio as 8h13min" dateTime="2024-05-11 08:13:30">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋 </p>
				<p>
					Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					<a href="nourl">jane.design/doctorcare</a>
				</p>

				<p>
					<a href="nourl">#novo </a>
					<a href="nourl">#projeto </a>
					<a href="nourl">#rocketseat </a>
					<a href="nourl">#nlw </a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário" />
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>
		</article>
	);
}
