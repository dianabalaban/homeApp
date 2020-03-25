import { combineReducers } from "redux";
import usersReducer from "./citiesReducer";
let rootReducer = combineReducers({
    users: usersReducer, 
   
});
export default rootReducer;