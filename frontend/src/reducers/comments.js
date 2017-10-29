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
            let commentsToUpdate = state[action.comment.parentId];
            let commentIndex = commentsToUpdate.findIndex((comment) => action.comment.id === comment.id);
            commentsToUpdate[commentIndex] = action.comment;
            return {
                ...state,
                [action.comment.parentId]: [...commentsToUpdate]
            };
        
        case DELETE_COMMENT:
            let commentsToDelete = state[action.postId];
            let remainingComments = commentsToDelete.filter((comment) => action.commentId !== comment.id);
            return {
                ...state,
                [action.postId]: remainingComments
            }
        
        default:
            return state;
    }
};

export default reducer;