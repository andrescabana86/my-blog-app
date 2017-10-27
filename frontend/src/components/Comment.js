import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CommentsActions from '../actions/comments.actionscreator';
import Moment from 'react-moment';

class Comment extends Component {

	deleteComment = () => {
		const { comment } = this.props;
		this.props.dispatch( CommentsActions.deleteComment(comment.parentId, comment.id) );
	}

	render () {
		const { comment } = this.props;
		return (
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
				<button className='comment-edit'>Edit</button>
				<button className='comment-error'
					onClick={this.deleteComment}>
					Remove
				</button>
			</section>
		);
	}
}

  
export default connect(null)(Comment);