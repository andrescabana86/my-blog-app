import {
    ADD_COMMENT,
    GET_COMMENTS,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from '../actions';

const initialState = {};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: [...state[action.comment.parentId], action.comment]
            };
        
        case GET_COMMENTS:
            return {
                ...state,
                [action.postId]: action.comments
            };
        
        case UPDATE_COMMENT:
            const commentIndex = state.findIndex((comment) => action.comment.id === comment.id);
            state[commentIndex] = action.comment;
            return [...state];
        
        case DELETE_COMMENT:
            const comments = state[action.postId];
            const remainingComments = comments.filter((comment) => action.commentId !== comment.id);
            return {
                ...state,
                [action.postId]: remainingComments
            }
        
        default:
            return state;
    }
};

export default reducer;