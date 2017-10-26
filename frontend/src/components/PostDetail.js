import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PostsAPI from '../api/posts.api';
import * as PostsActions from '../actions/posts.actionscreator';
import PostDetailComments from './PostDetailComments';
import ToolBar from './ToolBar';

class PostDetail extends Component {

	state = {
		post: null
	}

	deletePost = (postId) => {
		this.props.dispatch( PostsActions.deletePost(postId) );
		this.props.history.push('/');
	}

	voteUp = (postId) => {
		this.props.dispatch( PostsActions.voteUp(postId) );
		this.getPost(postId);
	}

	voteDown = (postId) => {
		this.props.dispatch( PostsActions.voteDown(postId) );
		this.getPost(postId);
	}

	componentDidMount () {
		
		let { match } = this.props;
		const postId = (match && match.params)
			? match.params.postId 
			: null;

		if (postId) {
			this.getPost(postId);
		}
	}

	getPost = (postId) => {
		PostsAPI.getPost(postId)
		.then((post) => {
			this.setState({post});
		});
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
				<h1 className="content-subhead">
					Post Detail:
					<Link to={'/'} className='pull-right'><small>{'< BACK'}</small></Link>
				</h1>
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
					<ToolBar post={post} 
						delete={() => this.deletePost(post.id)}
						voteUp={() => this.voteUp(post.id)} 
						voteDown={() => this.voteDown(post.id)} />
					<PostDetailComments post={post}/>
				</section>
			</div>
		);
	}

}
  
export default connect(null)(PostDetail);