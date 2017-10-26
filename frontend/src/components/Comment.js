import React from 'react';

const Comment = ({comment}) => (
	<section className="comment">
		<header className="comment-header">
			<h3 className="comment-author">{comment.author}</h3>
			<small className="comment-date">{comment.timestamp}</small>
		</header>
		<article className="comment-body">
			<p>{comment.body}</p>
		</article>
	</section>
);

  
export default Comment;