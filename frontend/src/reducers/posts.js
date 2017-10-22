import {
    ADD_POST, 
    GET_POST,
    GET_POSTS,
    UPDATE_POST, 
    DELETE_POST
} from '../actions';

const initialState = {};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
        case GET_POST:
            return {
                ...state,
                posts: [action.post]
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case UPDATE_POST:
            const postIndex = state.posts.findIndex((post) => action.post.id === post.id)
            const {posts} = state
            posts[postIndex] = action.post
            return {...state, 
                posts:
                    [...posts]
            };
        case DELETE_POST:
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