import sortBy from 'sort-by';
import * as PostsAPI from '../api/posts.api';
import {
	ADD_POST,
	GET_POST,
	GET_POSTS,
	UPDATE_POST,
	SORT_POSTS,
	DELETE_POST
} from '../actions';

const addPostAction = (post) => ({
	type: ADD_POST,
	post
});

export const addPost = (post) => dispatch => (
	PostsAPI
		.addPost(post)
		.then(post => dispatch( addPostAction(post) ))
);

const getPostAction = (post) => ({
	type: GET_POST,
	post
});

export const getPost = (postId) => dispatch => (
	PostsAPI
		.getPost(postId)
		.then(post => dispatch( getPostAction(post) ))
);

const getPostsAction = (posts) => ({
	type: GET_POSTS,
	posts
});

export const getPosts = () => dispatch => (
	PostsAPI
		.getAll()
		.then(posts => dispatch( getPostsAction(posts) ))
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

export const sortPosts = (posts, sortTerm) => {
	return {
		type: SORT_POSTS,
		posts: posts.sort(sortBy(sortTerm))
	};
};

const deletePostAction = (postId) => ({
	type: DELETE_POST,
	postId
});

export const deletePost = (postId) => dispatch => (
	PostsAPI
		.deletePost(postId)
		.then( () => dispatch( deletePostAction(postId) ))
);

export const voteUp = (postId) => dispatch => (
	PostsAPI
		.upVote(postId)
		.then(post => dispatch( updatePostAction(post) ))
);

export const voteDown = (postId) => dispatch => (
	PostsAPI
		.downVote(postId)
		.then(post => dispatch( updatePostAction(post) ))
);