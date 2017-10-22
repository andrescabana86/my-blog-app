import {
    GET_POSTS_FROM_CATEGORIES,
    GET_CATEGORIES
} from '../actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
    	case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        case GET_POSTS_FROM_CATEGORIES:
            return {
                ...state,
                posts: action.posts
            };
        default:
            return state;
    }
};

export default reducer;