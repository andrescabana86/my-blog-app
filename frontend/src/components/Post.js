import React from 'react';
import { Link } from 'react-router-dom';
import * as PostsActions from '../actions/posts.actionscreator';
import ToolBar from './ToolBar';

const Post = (props) => {

	const deletePost = () => {
		props.dispatch( PostsActions.deletePost(props.post.id) )
	}

	const voteUp = () => {
		props.dispatch( PostsActions.voteUp(props.post.id) )
	}

	const voteDown = () => {
		props.dispatch( PostsActions.voteDown(props.post.id) )
	}

	return (
		<section className="post">
			<header className="post-header">
				<h2 className="post-title">{ props.post.title }</h2>
				<p className="post-meta">
					By <a className="post-author">{ props.post.author } </a> 
					under <a className="post-category">{ props.post.category }</a> 
					-> {props.post.commentCount} Comment/s
				</p>
			</header>
			<article className="post-description">
				<p>{ props.post.body }</p>
			</article>
			<ToolBar post={props.post} 
				delete={deletePost}
				voteUp={voteUp} 
				voteDown={voteDown} />
			<Link to={`/${props.post.category}/${props.post.id}`}><small>View Post</small></Link>
		</section>
	);
	
};
  
export default Post;