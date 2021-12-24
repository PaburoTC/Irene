import { SET_LOGIN } from "./actions";

const initialState = {
    login: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}

export default reducer;