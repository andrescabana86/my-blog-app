import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CommentsActions from '../actions/comments.actionscreator';
import Comment from './Comment';

class PostDetailComments extends Component {

	componentDidMount () {
		let { post } = this.props;
		if (post.id) {
			this.props.dispatch( CommentsActions.getComments(post.id) );
		}
	}

	render () {
		
		const { comments } = this.props;

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

const mapStateToProps = (state, props) => ({
	post: state.post,
	comments: state.comments[state.post.id]
});

export default connect(mapStateToProps)(PostDetailComments);