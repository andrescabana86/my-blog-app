import * as CommentsAPI from '../api/comments.api'
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

const getCommentsAction = (comments) => ({
	type: GET_COMMENTS,
	comments,
});

export const getComments = (postId) => dispatch => (
	CommentsAPI
		.getComments(postId)
		.then(comments => dispatch( getCommentsAction(comments) ))
);

const updateCommentAction = (comment) => ({
	type: UPDATE_COMMENT,
	comment
});

export const udpdateComment = (comment) => dispatch => (
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

export const voteCommentUp = (id) =>  dispatch => (    
	CommentsAPI
		.upVote(id)
		.then(comment => dispatch( updateCommentAction(comment) ))
);

export const voteCommentDown = (commentId) => dispatch => (
	CommentsAPI
		.downVote(commentId)
		.then(comment => dispatch( updateCommentAction(comment) ))
);