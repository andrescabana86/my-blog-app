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
            return {
                ...state,
                comments: [...state.comments, action.comment]
            };
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };
        case UPDATE_COMMENT:
            const commentIndex = state.comments.findIndex((comment) => action.comment.id === comment.id)
            const {comments} = state
            comments[commentIndex] = action.comment
            return {...state, 
                comments:
                    [...comments]
            };
        case DELETE_COMMENT:
            const remainingComments = state.comments.filter((comment) => action.commentId !== comment.id)
            return {
                ...state,
                comments: remainingComments
            };

        default:
            return state;
    }
};

export default reducer;