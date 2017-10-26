import React from 'react';
import { Link } from 'react-router-dom';

const CreateOrEditPost = (props) => (
	<div className="content pure-u-1 pure-u-md-3-4">
		<h1 className="content-subhead">
			{ (!props.edit) ? 'Create a new Post:' : 'Edit Post:' }
		</h1>
		<form className='pure-form pure-form-stacked'
			onSubmit={props.onSubmit}
			onChange={props.onChange}>
			<fieldset>
				<div className="pure-g">
					<div className="input-group pure-u-1">
						<label htmlFor='post-title'>Post Title:</label>
						<input id='post-title'
							className='pure-u-1'
							type="text" 
							placeholder="It's 1 am and creativity is running out" 
							required 
							value={props.post.title}
							name="title" />
					</div>
					<div className="input-group pure-u-1">
						<label htmlFor='post-body'>Post Body:</label>
						<textarea id='post-body'
							className='pure-u-1'
							name="body"
							placeholder="This is my awesome blog post! Behold my knowledge and wit." 
							required 
							value={props.post.body}
							style={{"resize":"none"}}></textarea>
					</div>
					<div className="input-group pure-u-1 pure-u-md-1-2">
						<label htmlFor='post-author'>Author</label>
						<input id='post-author'
							type="text" 
							name="author"
							required 
							value={props.post.author}
							placeholder="Bruce Wayne" 
							className='pure-u-1 pure-u-md-23-24' />
					</div>
					<div className="input-group pure-u-1 pure-u-md-1-2">
						<label htmlFor='post-category'>Category</label>
						<select id='post-category'
							name="category"
							className='pure-u-1'
							value={props.post.category} >
							{
								Array.isArray(props.categories) 
								&& props.categories.map(({name, path}) => (
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
							{ (!props.edit) ? 'Create' : 'Save' }
						</button>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
);

  
export default CreateOrEditPost;