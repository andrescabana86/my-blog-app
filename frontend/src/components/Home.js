import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CategoriesActions from '../actions/categories.actionscreator';
import * as PostsActions from '../actions/posts.actionscreator';
import Post from './Post';

class Home extends Component {

	componentDidMount () {
		this.props.dispatch(PostsActions.getPosts());
	}

	render () {

		let { posts, match } = this.props;
		const category = (match && match.params)
			? match.params.path 
			: null;

		if (category) {
			posts = posts.filter((post) => {
				return post.category === category;
			})
		}

		return (
			<div className="content pure-u-1 pure-u-md-3-4">
				<h1 className="content-subhead">
					{ category ? `Category: ${category}` : 'All Posts' }
				</h1>
				{
					Array.isArray(posts) && posts.length > 0 
					? posts
						.filter((post) => !post.deleted)
						.map((post, index) => (
							<Post key={index} post={post} /> 
						))
					: <small>No posts... :(</small>
				}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	posts: state.posts
});
  
export default connect(mapStateToProps)(Home);