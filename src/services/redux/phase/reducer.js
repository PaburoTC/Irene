import { SET_PHASE } from "./actions";

const initialState = 'login'

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PHASE: return action.payload
        default: return state
    }
}

export default reducer;