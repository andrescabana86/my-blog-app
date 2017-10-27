import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => (
	<section className="comment">
		<header className="comment-header">
			<h3 className="comment-author">{comment.author}</h3>
			<small className="comment-date">
				<Moment format='MMM DD YYYY HH:MM'>{comment.timestamp}</Moment>
			</small>
		</header>
		<article className="comment-body">
			<p>{comment.body}</p>
		</article>
		<Link to={'/'} className='comment-edit'>Edit</Link>
		<Link to={'/'} className='comment-error'>Remove</Link>
	</section>
);

  
export default Comment;