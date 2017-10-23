import React, { Component } from 'react';

class PostDetail extends Component {

	render () {
		return (
			<section className="post">
				<header className="post-header">
					<h2 className="post-title">{ post.title }</h2>
					<p className="post-meta">
						By <a className="post-author" href='#'>{ post.author } </a> 
						under <a className="post-category">{ post.category }</a> 
						-> {post.commentCount} Comment/s
					</p>
				</header>
				<article className="post-description">
					<p>{ post.body }</p>
				</article>
			</section>
		);
	}
}

  
export default Detail;