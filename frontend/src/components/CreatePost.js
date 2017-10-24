import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import * as PostsActions from '../actions/posts.actionscreator';

class CreatePost extends Component {
	state = {
		id: uuid(),
		title: '',
		body: '',
		author: '',
		category: '',
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
		const { categories } = this.props;
		return (
			<div className="content pure-u-1 pure-u-md-3-4">
				<h1 className="content-subhead">Create a new Post:</h1>
				<form className='pure-form pure-form-stacked'
					onSubmit={this.submit}
					onChange={this.onChangeHandler}>
					<fieldset>
						<div className="pure-g">
							<div className="input-group pure-u-1">
								<label htmlFor='post-title'>Post Title:</label>
								<input id='post-title'
									className='pure-u-1'
									type="text" 
									placeholder="It's 1 am and creativity is running out" 
									required 
									value={this.state.title}
									name="title" />
							</div>
							<div className="input-group pure-u-1">
								<label htmlFor='post-body'>Post Body:</label>
								<textarea id='post-body'
									className='pure-u-1'
									name="body"
									placeholder="This is my awesome blog post! Behold my knowledge and wit." 
									required 
									value={this.state.body}
									style={{"resize":"none"}}></textarea>
							</div>
							<div className="input-group pure-u-1 pure-u-md-1-2">
								<label htmlFor='post-author'>Author</label>
								<input id='post-author'
									type="text" 
									name="author"
									required 
									value={this.state.author}
									placeholder="Bruce Wayne" 
									className='pure-u-1 pure-u-md-23-24' />
							</div>
							<div className="input-group pure-u-1 pure-u-md-1-2">
								<label htmlFor='post-category'>Category</label>
								<select id='post-category'
									name="category"
									className='pure-u-1'
									value={this.state.category} >
									{
										Array.isArray(categories) 
										&& categories.map(({name, path}) => (
											<option value={path} key={path}>{name}</option>
										))
									}
								</select>
							</div>
							<div className="input-group pure-u-1">
    							<Link to='/'
    								role='link'
    								className="button-error pure-button pull-right pure-u-1-2 pure-u-md-4-24">
    								Cancel
    							</Link>
								<button type='submit'
									className="button-success pure-button pull-right pure-u-1-2 pure-u-md-4-24">
									Create
								</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	categories: state.categories
});
  
export default connect(mapStateToProps)(CreatePost);