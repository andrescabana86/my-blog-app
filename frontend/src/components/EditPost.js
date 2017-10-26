import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsAPI from '../api/posts.api';
import * as PostsActions from '../actions/posts.actionscreator';
import CreateOrEditPost from './CreateOrEditPost';

class EditPost extends Component {

	state = {
		id: '',
		title: '',
		body: '',
		author: '',
		category: 'react',
		voteScore: 0,
		deleted: false,
		timestamp: 0
	}

	componentDidMount () {

		let { match } = this.props;
		const postId = (match && match.params)
			? match.params.postId 
			: null;

		if (postId) {
			PostsAPI.getPost(postId)
			.then((post) => {
				this.setState({...post});
			});
		}
	}

	submit = (e) => {
		e.preventDefault();
		this.props.dispatch( PostsActions.updatePost(this.state) );
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
				edit={true}
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
  
export default connect(mapStateToProps)(EditPost);