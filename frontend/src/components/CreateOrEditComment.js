import React from 'react';

const CreateOrEditComment = (props) => (
	<form className='pure-form pure-form-stacked'
		onSubmit={props.onSubmit}
		onChange={props.onChange} >
		<fieldset>
			<div className="pure-g">
				<div className="input-group pure-u-1 pure-u-md-1-2">
					<label htmlFor='comment-author'>Comment Author</label>
					<input id='comment-author'
						type="text" 
						name="author"
						required 
						value={props.comment.author}
						onChange={props.onChange}
						placeholder="Bruce Wayne" 
						className='pure-u-1 pure-u-md-23-24' />
				</div>
				<div className="input-group pure-u-1">
					<label htmlFor='comment-body'>Comment Body:</label>
					<textarea id='comment-body'
						className='pure-u-1'
						name="body"
						placeholder="This is my awesome comment!" 
						required 
						value={props.comment.body}
						onChange={props.onChange}
						style={{"resize":"none"}}></textarea>
				</div>
				<div className="input-group pure-u-1">
					<button type='button'
						className="button-error pure-button button-xsmall pull-right pure-u-1-2 pure-u-md-4-24"
						onClick={props.goBack}>
						Cancel
					</button>
					<button type='submit'
						className="button-success pure-button button-xsmall pull-right pure-u-1-2 pure-u-md-4-24">
						{ (!props.edit) ? 'Comment' : 'Edit' }
					</button>
				</div>
			</div>
		</fieldset>
	</form>
);

  
export default CreateOrEditComment;