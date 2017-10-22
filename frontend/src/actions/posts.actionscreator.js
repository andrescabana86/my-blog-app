import CategoriesAPI from '../api/categories.api'
import {
	ADD_POST,
	GET_POST,
	GET_POSTS,
	UPDATE_POST,
	DELETE_POST
} from './actions';

const addPostAction = (post) => ({
	type: ADD_POST,
	post
});

export const addPost = (post) => dispatch => (
	PostAPI
		.addPost(post)
		.then(post => dispatch( addPostAction(post) ));
);

const getPostAction = (post) => ({
	type: GET_POST,
	post
});

export const getPost = (postId) => dispatch => (
	PostAPI
		.getPost(postId)
		.then(post => dispatch( getPostAction(post) ));
);

const getPostsAction = (posts) => ({
	type: GET_POSTS,
	posts
});

export const getPosts = () => dispatch => (
	PostAPI
		.getAll()
		.then(posts => dispatch( getPostsAction(posts) ));
);

const updatePostAction = (post) => ({
	type: EDIT_POST,
	post
});

export const updatePost = (post) => dispatch => (
	PostAPI
		.editPost(post)
		.then(post => dispatch( updatePostAction(post) ));
);

const deletePostAction = (postId) => ({
	type: DELETE_POST,
	postId
});

export const deletePost = (postId) => dispatch => {
	PostAPI
		.deletePost(postId)
		.then( () => dispatch( deletePostAction(postId) ));
}

export const votePostUp = (id) => dispatch => (
	PostAPI
		.upVote(id)
		.then(post => dispatch( updatePostAction(post) ));
);

export const votePostDown = (postId) => dispatch => (
	PostAPI
		.downVote(postId)
		.then(post => dispatch( updatePostAction(post) ));
);