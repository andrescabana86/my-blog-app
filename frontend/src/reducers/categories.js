import {
    GET_CATEGORIES,
    GET_POSTS_FROM_CATEGORIES
} from '../actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
    	case GET_CATEGORIES:
            return action.categories;
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