import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import * as PostsActions from '../actions/posts.actionscreator';
import CreateOrEditPost from './CreateOrEditPost';

class CreatePost extends Component {
	state = {
		id: uuid(),
		title: '',
		body: '',
		author: '',
		category: 'react',
		voteScore: 0,
		deleted: false,
		timestamp: Date.now()
	}

	submit = (e) => {
		e.preventDefault();
		this.props.dispatch(PostsActions.addPost(this.state));
		this.props.history.push('/');
	}

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<CreateOrEditPost 
				categories={this.props.categories}
				onSubmit={this.submit}
				onChange={this.onChangeHandler}
				post={this.state} />
		)
	}
}

const mapStateToProps = (state, props) => ({
	categories: state.categories
});
  
export default connect(mapStateToProps)(CreatePost);