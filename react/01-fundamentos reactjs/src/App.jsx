import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./app.module.css";
import "./global.css";

const posts = [
	{
		id: 1,
		author: {
			name: "Fernando Rodrigues",
			avatarUrl: "https://github.com/fernandortec.png",
			role: "Mid level Full stack developet",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋 " },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedDate: new Date("2024-05-03 20:00:00"),
	},
	{
		id: 2,
		author: {
			name: "Diego Fernandes",
			avatarUrl: "https://github.com/diego3g.png",
			role: "CTO @Rocketseat",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋 " },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],

		publishedDate: new Date("2024-05-10 20:00:00"),
	},
];

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedDate}
						/>
					))}
				</main>
			</div>
		</div>
	);
}

export default App;
