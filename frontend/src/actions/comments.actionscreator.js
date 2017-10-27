import * as CommentsAPI from '../api/comments.api';
import {
	ADD_COMMENT,
	GET_COMMENTS,
	UPDATE_COMMENT,
	DELETE_COMMENT
} from '../actions';

const addCommentAction = (comment) => ({
	type: ADD_COMMENT,
	comment
});

export const addComment = (comment) => dispatch => (
	CommentsAPI
		.addComment(comment)
		.then(comment => dispatch( addCommentAction(comment) ))
);

const getCommentsAction = (comments, postId) => ({
	type: GET_COMMENTS,
	comments,
	postId
});

export const getComments = (postId) => dispatch => (
	CommentsAPI
		.getComments(postId)
		.then(comments => dispatch( getCommentsAction(comments, postId) ))
);

const updateCommentAction = (comment) => ({
	type: UPDATE_COMMENT,
	comment
});

export const updateComment = (comment) => dispatch => (
	CommentsAPI
		.editComment(comment)
		.then(comment => dispatch( updateCommentAction(comment) ))
);

const deleteCommentAction = (commentId) => ({
	type: DELETE_COMMENT,
	commentId
});

export const deleteComment = (commentId) => dispatch => (
	CommentsAPI
		.deleteComment(commentId)
		.then(() => dispatch( deleteCommentAction(commentId) ))
);

export const voteUpComment = (id) =>  dispatch => (    
	CommentsAPI
		.upVote(id)
		.then(comment => dispatch( updateCommentAction(comment) ))
);

export const voteDownComment = (commentId) => dispatch => (
	CommentsAPI
		.downVote(commentId)
		.then(comment => dispatch( updateCommentAction(comment) ))
);