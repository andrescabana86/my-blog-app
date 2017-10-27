import { 
    GET_POST,
    UPDATE_POST,
    DELETE_POST,
    CLEAR_POST
} from '../actions';

const initialState = {};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_POST:
            return {...action.post};
        
        case UPDATE_POST:
            return {...action.post};
        
        case DELETE_POST:
            return {};

        case CLEAR_POST:
            return {};
            
        default:
            return state;
    }
};

export default reducer;