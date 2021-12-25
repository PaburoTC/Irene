import { combineReducers, createStore } from "redux";
import phaseReducer from './phase/reducer';
import familyReducer from './family/reducer';
import { loadState } from "../localStorage/localStorage";

const reducer = combineReducers({
    phase: phaseReducer,
    family: familyReducer
})

const store = createStore(reducer, loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;