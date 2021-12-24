import { combineReducers, createStore } from "redux";
import loginReducer from './login/reducer';
import { loadState } from "../localStorage/localStorage";

const reducer = combineReducers({
    login: loginReducer
})

const store = createStore(reducer, loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;