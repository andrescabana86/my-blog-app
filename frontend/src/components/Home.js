import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PostsActions from '../actions/posts.actionscreator';
import FaIconPlus from 'react-icons/lib/fa/plus';
import Post from './Post';

class Home extends Component {


	componentDidMount () {
		this.props.dispatch(PostsActions.getPosts());
	}
	
	sortBy = (evt, posts) => {
		const sorting = evt.target.value;
		this.props.dispatch(PostsActions.sortPosts(posts, sorting));
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
					<form className="pure-form sort-selector">
						<label htmlFor='sort-select'>Sort by:</label>
						<select id='sort-select' 
							onChange={ (e) => this.sortBy(e, posts) } >
							<option defaultValue value="-voteScore">Most Popular</option>
							<option value="voteScore">Least Popular</option>
							<option value="-timestamp">Most Recent</option>
							<option value="timestamp">Least Recent</option>
						</select>
					</form>
				</h1>
				{
					Array.isArray(posts) && posts.length > 0 
					? posts
						.filter((post) => !post.deleted)
						.map((post, index) => (
							<Post key={index} post={post} dispatch={this.props.dispatch} /> 
						))
					: <small>No posts... :(</small>
				}
				<Link to='/createPost'
					className='pure-button floating-action-button'
					title='+ New Post'>
					<FaIconPlus />
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	posts: state.posts
});
  
export default connect(mapStateToProps)(Home);