import {
    ADD_POST, 
    GET_POSTS,
    SORT_POSTS,
    UPDATE_POSTS, 
    DELETE_POST
} from '../actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_POST:
            return [...state, action.post];
        
        case GET_POSTS:
            return [...action.posts];
        
        case SORT_POSTS:
            return [...action.posts];

        case UPDATE_POSTS:
            const postIndex = state.findIndex((post) => action.post.id === post.id);
            state[postIndex] = action.post;
            return [...state];
        
        case DELETE_POST:
            const remainingPosts = state.filter((post) => action.postId !== post.id);
            return [...remainingPosts];
            
        default:
            return state;
    }
};

export default reducer;