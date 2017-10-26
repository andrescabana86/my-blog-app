import {
    ADD_COMMENT,
    GET_COMMENTS,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from '../actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_COMMENT:
            return [...state, action.comment];
        
        case GET_COMMENTS:
            return [...action.comments];
        
        case UPDATE_COMMENT:
            const commentIndex = state.findIndex((comment) => action.comment.id === comment.id);
            state[commentIndex] = action.comment;
            return [...state];
        
        case DELETE_COMMENT:
            const remainingComments = state.filter((comment) => action.commentId !== comment.id);
            return [...remainingComments];
        
        default:
            return state;
    }
};

export default reducer;