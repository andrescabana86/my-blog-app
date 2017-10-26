import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsActions from '../actions/posts.actionscreator';
import PostDetailComments from './PostDetailComments';

class PostDetail extends Component {

	componentDidMount () {
		let { match } = this.props;
		const postId = (match && match.params)
			? match.params.postId 
			: null;
		if (postId) {
			this.props.dispatch(PostsActions.getPost(postId));
		}
	}

	render () {
		
		const post = this.props.posts.length > 1
			? null
			: this.props.posts[0];

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

const mapStateToProps = (state, props) => ({
	posts: state.posts
});
  
export default connect(mapStateToProps)(PostDetail);