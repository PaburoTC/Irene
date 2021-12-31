import { SET_PHASE } from "./actions";

const initialState = process.env.REACT_APP_LOGIN

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PHASE: return action.payload
        default: return state
    }
}

export default reducer;