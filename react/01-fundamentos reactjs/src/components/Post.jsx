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
				<p>
					Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
				</p>
				<p>
					projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
				</p>
				<p>é DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto #nlw</p>
				<p>
					<a href="nourl">#novo projeto #nlw #rocketseat</a>
				</p>
			</div>
		</article>
	);
}
