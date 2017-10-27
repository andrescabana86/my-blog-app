import {
    GET_CATEGORIES
} from '../actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
    	
        case GET_CATEGORIES:
            return action.categories;
        
        default:
            return state;
    }
};

export default reducer;