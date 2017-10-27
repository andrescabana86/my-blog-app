import * as PostsAPI from '../api/posts.api';
import {
	GET_POST,
	UPDATE_POST,
	DELETE_POST
} from '../actions';

const getPostAction = (post) => ({
	type: GET_POST,
	post
});

export const getPost = (postId) => dispatch => (
	PostsAPI
		.getPost(postId)
		.then(post => dispatch( getPostAction(post) ))
);

const updatePostAction = (post) => ({
	type: UPDATE_POST,
	post
});

export const updatePost = (post) => dispatch => (
	PostsAPI
		.editPost(post)
		.then(post => dispatch( updatePostAction(post) ))
);

const deletePostAction = (postId) => ({
	type: DELETE_POST,
	postId
});

export const deletePost = (postId) => dispatch => (
	PostsAPI
		.deletePost(postId)
		.then( () => dispatch( deletePostAction(postId) ))
);

export const voteUpPost = (postId) => dispatch => (
	PostsAPI
		.upVote(postId)
		.then(post => dispatch( updatePostAction(post) ))
);

export const voteDownPost = (postId) => dispatch => (
	PostsAPI
		.downVote(postId)
		.then(post => dispatch( updatePostAction(post) ))
);