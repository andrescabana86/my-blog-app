import {
    ADD_COMMENT,
    EDIT_COMMENT,
    EDITING_COMMENT, 
    REMOVE_COMMENT,
    GET_COMMENTS
} from '../actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
    	case GET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };
        case EDITING_COMMENT:
            return {
                ...state,
                editingComment: action.comment
            };
        case EDIT_COMMENT:
            const commentIndex = state.comments.findIndex((comment) => action.comment.id === comment.id)
            const {comments} = state
            comments[commentIndex] = action.comment
            return {...state, 
                comments:
                    [...comments]
            };
        case REMOVE_COMMENT:
            const remainingComments = state.comments.filter((comment) => action.commentId !== comment.id)
            
            return {
                ...state,
                comments: remainingComments
            };
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            };
        default:
            return state;
    }
};

export default reducer;