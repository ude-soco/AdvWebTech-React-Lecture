import {combineReducers, createStore} from "redux";
import counterReducer from "./reducers/counterReducer";


const reducer = combineReducers({
  counter: counterReducer
})

export const store = createStore(reducer);