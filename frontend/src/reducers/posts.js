import {
    ADD_POST, 
    GET_POST,
    GET_POSTS,
    UPDATE_POST, 
    SORT_POSTS, 
    DELETE_POST
} from '../actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_POST:
            return [...state.posts, action.post];
        
        case GET_POST:
            return [...action.posts];
        
        case GET_POSTS:
            return [...action.posts];
        
        case UPDATE_POST:
            const postIndex = state.posts.findIndex((post) => action.post.id === post.id);
            state.posts[postIndex] = action.post;
            return [...state.posts];
        
        case SORT_POSTS:
            return [...action.posts];
        
        case DELETE_POST:
            const remainingPosts = state.posts.filter((post) => action.postId !== post.id);
            return [...remainingPosts];
            
        default:
            return state;
    }
};

export default reducer;