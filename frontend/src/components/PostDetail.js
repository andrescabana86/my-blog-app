import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsAPI from '../api/posts.api';
import PostDetailComments from './PostDetailComments';

class PostDetail extends Component {

	state = {
		post: null
	}

	componentDidMount () {
		
		let { match } = this.props;
		const postId = (match && match.params)
			? match.params.postId 
			: null;

		if (postId) {
			PostsAPI.getPost(postId)
			.then((post) => {
				this.setState({post});
			});
		}
	}

	render () {

		const post = this.state.post;

		if (!post) {
			return (
				<div className="content pure-u-1 pure-u-md-3-4">
					<h1 className="content-subhead">Loading Post...</h1>
				</div>
			);
		}

		return (
			<div className="content pure-u-1 pure-u-md-3-4">
				<h1 className="content-subhead">Post:</h1>
				<section className="post">
					<header className="post-header">
						<h2 className="post-title">{ post.title }</h2>
						<p className="post-meta">
							By <a className="post-author">{ post.author } </a> 
							under <a className="post-category">{ post.category }</a>
						</p>
					</header>
					<article className="post-description">
						<p>{ post.body }</p>
					</article>
					<PostDetailComments post={post}/>
				</section>
			</div>
		);
	}

}
  
export default PostDetail;