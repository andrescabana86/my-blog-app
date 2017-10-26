import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CommentsActions from '../actions/comments.actionscreator';
import Comment from './Comment';

class PostDetailComments extends Component {

	componentDidMount () {
		let { post } = this.props;
		if (post.commentCount) {
			this.props.dispatch(CommentsActions.getComments(post.id));
		}
	}

	render () {
		const comments = this.props.comments;
		return (
			<div className="post-comments">
				<legend>Comments:</legend>
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
	comments: state.comments
});
  
export default connect(mapStateToProps)(PostDetailComments);