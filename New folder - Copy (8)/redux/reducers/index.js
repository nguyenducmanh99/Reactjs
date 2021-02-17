import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
     todo: todoReducer  //,
    // couter:couterRecuder
});

export default rootReducer;