import * as CategoriesAPI from '../api/categories.api'
import {
	GET_CATEGORIES
} from '../actions';

const getCategories =  (categories) => ({
	type: GET_CATEGORIES,
	categories
});

export const fetchCategories = () => dispatch => (
	CategoriesAPI
		.getAll()
		.then(categories => dispatch(getCategories(categories)))    
);