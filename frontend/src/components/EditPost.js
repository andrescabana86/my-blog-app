import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostActions from '../actions/post.actionscreator';
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
			this.props.dispatch( PostActions.getPost(postId) )
			.then(() => {
				this.setState({...this.props.post});
			});
		}
	}

	submit = (e) => {
		e.preventDefault();
		this.props.dispatch( PostActions.updatePost(this.state) );
		this.props.history.push('/');
	}

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<CreateOrEditPost 
				edit={true}
				categories={this.props.categories}
				post={this.state}
				onSubmit={this.submit}
				onChange={this.onChangeHandler} />
		)
	}
}

const mapStateToProps = (state, props) => ({
	categories: state.categories,
	post: state.post
});
  
export default connect(mapStateToProps)(EditPost);