import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsActions from '../actions/posts.actionscreator';
import CreateOrEditPost from './CreateOrEditPost';

class CreatePost extends Component {

	state = {
		id: '',
		title: '',
		body: '',
		author: '',
		category: 'react',
		voteScore: 0,
		deleted: false,
		timestamp: Date.now()
	}

	componentDidMount () {
		this.props.dispatch(PostsActions.getPost(this.props.postId));
	}

	submit = (e) => {
		e.preventDefault();
		this.props.dispatch(PostsActions.updatePost(this.state));
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