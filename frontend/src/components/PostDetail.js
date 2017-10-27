import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import * as PostActions from '../actions/post.actionscreator';
import PostDetailComments from './PostDetailComments';
import ToolBar from './ToolBar';
import AddComment from './AddComment';

class PostDetail extends Component {

	deletePost = (postId) => {
		this.props.dispatch( PostActions.deletePost(postId) );
		this.props.history.push('/');
	}

	voteUp = (postId) => {
		this.props.dispatch( PostActions.voteUpPost(postId) );
	}

	voteDown = (postId) => {
		this.props.dispatch( PostActions.voteDownPost(postId) );
	}

	componentDidMount () {

		let { match } = this.props;
		const postId = (match && match.params)
			? match.params.postId 
			: null;

		if (postId) {
			this.props.dispatch( PostActions.getPost(postId) );
		}
	}

	render () {

		const { post } = this.props;

		if (!post || !post.id) {
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
					<PostDetailComments />

					<Route exact path={`/${post.category}/${post.id}/detail`} render={() => (
						<Link title='+ New Comment' 
							to={`/${post.category}/${post.id}/detail/add/comment`}
							className='add-comment-link'>
							<small>+ Add Comment</small>
						</Link>
					)} />
					<Route exact path={`/${post.category}/${post.id}/detail/add/comment`} component={AddComment}/>

				</section>
			</div>
		);
	}

}

const mapStateToProps = (state, props) => ({
	post: state.post
});
  
export default connect(mapStateToProps)(PostDetail);