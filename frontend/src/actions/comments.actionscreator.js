import CategoriesAPI from '../api/categories.api'
import {
	ADD_COMMENT,
	GET_COMMENTS,
	UPDATE_COMMENT,
	DELETE_COMMENT
} from './actions';

const addCommentAction = (comment) => ({
	type: ADD_COMMENT,
	comment
});

export const addComment = (comment) => dispatch => (
	CommentAPI
		.addComment(comment)
		.then(comment => dispatch( addCommentAction(comment) ));
);

const getCommentsAction = (comments) => ({
	type: GET_COMMENTS,
	comments,
});

export const getComments = (postId) => dispatch => (
	CommentAPI
		.getComments(postId)
		.then(comments => dispatch( getCommentsAction(comments) ));
);

const updateCommentAction = (comment) => ({
	type: UPDATE_COMMENT,
	comment
});

export const udpdateComment = (comment) => dispatch => (
	CommentAPI
		.editComment(comment)
		.then(comment => dispatch( updateCommentAction(comment) ));
);

const deleteCommentAction = (commentId) => ({
	type: DELETE_COMMENT,
	commentId
});

export const deleteComment = (commentId) => dispatch => {
	CommentAPI
		.deleteComment(commentId)
		.then(() => dispatch( deleteCommentAction(commentId) ));
}

export const voteCommentUp = (id) =>  dispatch => (    
	CommentAPI
		.upVote(id)
		.then(comment => dispatch( updateCommentAction(comment) ));
);

export const voteCommentDown = (commentId) => dispatch => (
	CommentAPI
		.downVote(commentId)
		.then(comment => dispatch( updateCommentAction(comment) ));
);