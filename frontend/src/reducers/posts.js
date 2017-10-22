import {
    ADD_POST, 
    EDIT_POST,
    EDITING_POST, 
    REMOVE_POST, 
    GET_POSTS,
    GET_POST
} from '../actions';

const initialState = {};
const reducer = (state = initialState, action) => {
    switch (action.type) {
    	case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case GET_POST:
            return {
                ...state,
                posts: [action.post]
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
            
        case EDITING_POST:
            return {
                ...state,
                editingPost: action.post
            };
        case EDIT_POST:
            const postIndex = state.posts.findIndex((post) => action.post.id === post.id)
            const {posts} = state
            posts[postIndex] = action.post
            return {...state, 
                posts:
                    [...posts]
            };
        case REMOVE_POST:
            const remainingPosts = state.posts.filter((post) => action.postId !== post.id)
            
            return {
                ...state,
                posts: remainingPosts
            };
        default:
            return state;
    }
};

export default reducer;