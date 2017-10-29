import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CommentsActions from '../actions/comments.actionscreator';
import Moment from 'react-moment';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-o-down';
import CreateOrEditComment from './CreateOrEditComment';

class Comment extends Component {
	
	state = {
		edit: false
	}

	componentDidMount () {
		let { comment } = this.props;
		this.setState({...comment});
	}
	
	editComment = () => {
		this.setState({edit: true});
	}

	deleteComment = () => {
		const { comment } = this.props;
		this.props.dispatch( CommentsActions.deleteComment(comment.parentId, comment.id) );
	}

	submit = (e) => {
		e.preventDefault();
		const comment = { ...this.state };
		delete comment.edit;
		this.props.dispatch( CommentsActions.updateComment(comment) );
		this.goBack();
	}

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	goBack = () => {
		this.setState({edit: false});
	}

	voteUp = () => {
		this.props.dispatch( CommentsActions.voteUpComment(this.state.id) )
	}

	voteDown = () => {
		this.props.dispatch( CommentsActions.voteDownComment(this.state.id) )
	}

	render () {

		const comment = this.state;

		if (comment && comment.id) {

			return (
				(this.state.edit) 
					? 
						<section className="comment">
							<CreateOrEditComment comment={comment}
								edit={true}
								onSubmit={this.submit}
								onChange={this.onChangeHandler} 
								goBack={this.goBack}/>
						</section>
					:
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
							<a className='comment-edit'
								onClick={this.editComment}>
								Edit
							</a>
							<a className='comment-error'
								onClick={this.deleteComment}>
								Remove
							</a>
							<a className='comment-vote-up'
								onClick={this.voteUp} >
								<FaThumbsUp />
							</a>
							<a className='comment-vote-down'
								onClick={this.voteDown} >
								<FaThumbsDown />
							</a>
							<span className='comment-vote-score'>-> {comment.voteScore} Vote/s</span>
						</section>
					
			);
		}
		return null;
	}
}
  
export default connect(null)(Comment);