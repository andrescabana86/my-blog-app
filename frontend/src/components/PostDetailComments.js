import React, { Component } from 'react';
import * as CommentsAPI from '../api/comments.api';
import Comment from './Comment';

class PostDetailComments extends Component {

	state = {
		comments: null
	}

	componentDidMount () {
		let { post } = this.props;
		if (post.commentCount) {
			CommentsAPI.getComments(post.id)
			.then((comments) => {
				this.setState({comments});
			})
		}
	}

	render () {
		
		const comments = this.state.comments;
		
		return (
			<div className="post-comments">
				<legend>{comments && comments.length} Comment/s:</legend>
				{
					(Array.isArray(comments) && comments.length > 0) 
						? comments
							.filter((comment) => !comment.deleted)
							.map((comment, index) => (
								<Comment key={index} comment={comment} /> 
							))
						: <small>No comments... :(</small>
				}
			</div>
		);
	}

}

export default PostDetailComments;