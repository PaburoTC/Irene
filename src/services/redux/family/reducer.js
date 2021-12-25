import { 
    SET_MATERNAL,
    SET_PATERNAL
} from "./actions";

const initialState = {
    maternal:{
        grandpa:{
            name: '',
            correct: false
        },
        grandma:{
            name: '',
            correct: false
        },
        cousin1:{
            name: '',
            correct: false
        },
        cousin2:{
            name: '',
            correct: false
        },
        cousin3:{
            name: '',
            correct: false
        },
        mother: {
            name: '',
            correct: false
        },
        father: {
            name: '',
            correct: false
        },
        sister: {
            name: '',
            correct: false
        }
    },
    paternal:{
        grandpa:{
            name: '',
            correct: false
        },
        grandma:{
            name: '',
            correct: false
        },
        cousin1:{
            name: '',
            correct: false
        },
        cousin2:{
            name: '',
            correct: false
        },
        cousin3:{
            name: '',
            correct: false
        },
        cousin4:{
            name: '',
            correct: false
        },
        nephew: {
            name: '',
            correct: false
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_MATERNAL:
            return {
                ...state,
                maternal:{
                    ...state.maternal,
                    ...action.payload
                }
            }
        case SET_PATERNAL:
            return {
                ...state,
                paternal:{
                    ...state.paternal,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

export default reducer;