import React from 'react';
import { Link } from 'react-router-dom';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-o-down';

const ToolBar = (props) => (
	<section className='toolbar'>
		<div className="pure-button-group">
			<Link to={'/edit/post/' + props.post.id}
				className='pure-button button-xsmall button-success'>
				Edit
			</Link>
			<button className='pure-button button-xsmall button-error'
				onClick={props.delete} >
				Remove
			</button>
			<button className='pure-button button-xsmall button-success'
				onClick={props.voteUp} >
				<FaThumbsUp />
			</button>
			<button className='pure-button button-xsmall button-error'
				onClick={props.voteDown} >
				<FaThumbsDown />
			</button>
		</div>
		<small className='vote-score'>-> {props.post.voteScore} Vote/s</small>
	</section>
);

export default ToolBar;