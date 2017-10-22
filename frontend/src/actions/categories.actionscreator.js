import CategoriesAPI from '../api/categories.api'
import {
	GET_CATEGORIES,
	GET_POSTS_FROM_CATEGORIES
} from './actions';

const getCategories =  (categories) => ({
	type: GET_CATEGORIES,
	categories
});

export const fetchCategories = () => dispatch => (
	CategoryAPI
		.getAll()
		.then(categories => dispatch(getCategories(categories)))    
);


const getPostsFromCategories = (posts) => ({
	type: GET_POSTS_FROM_CATEGORIES,
	posts
});

export const fetchPostsFromCategory = (category) => dispatch => (
	CategoryAPI
		.getPosts(category)
		.then(posts => dispatch(getPostsFromCategories(posts)))
);