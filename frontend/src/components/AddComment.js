import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import * as CommentsActions from '../actions/comments.actionscreator';
import CreateOrEditComment from './CreateOrEditComment';

class AddComment extends Component {

	state = {
		id: uuid(),
		parentId: '',
		body: '',
		author: '',
		voteScore: 0,
		deleted: false,
		parentDeleted: false,
		timestamp: Date.now()
	}

	submit = (e) => {
		e.preventDefault();
		this.props.dispatch( CommentsActions.addComment(this.state) );
		this.props.history.goBack();
	}

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	goBack = () => {
		this.props.history.goBack();
	}

	render () {
		return (
			<section className="comment">
				<CreateOrEditComment 
					onSubmit={this.submit}
					onChange={this.onChangeHandler}
					comment={this.state} 
					goBack={this.goBack}/>
			</section>
		);
	}
}
  
export default connect(null)(AddComment);