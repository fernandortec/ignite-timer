import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./post.module.css";

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(["Post muito bacana, hein"]);
	const [newCommentText, setNewCommentText] = useState("");

	const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
		locale: ptBR,
	});
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleCreateNewComment() {
		event.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewCommentChange() {
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	}

	const handleNewCommentInvalid = () => {
		event.target.setCustomValidity("Esse campo é obrigatório");
		setNewCommentText("");
	};

	const deleteComment = (commentToDelete) => {
		const commentWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentWithoutDeletedOne);
	};

	const isNewCommentEmpty = newCommentText.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === "paragraph") {
						return <p key={line.content}>{line.content}</p>;
					}
					if (line.type === "link") {
						return (
							<p key={line.content}>
								<a href={line.content}> {line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form className={styles.commentForm} onSubmit={handleCreateNewComment}>
				<strong>Deixe seu feedback</strong>

				<textarea
					name="comment"
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => (
					<Comment
						key={comment}
						content={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</div>
		</article>
	);
}
