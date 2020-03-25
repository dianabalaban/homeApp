import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
let rootReducer = combineReducers({
    products: productsReducer, 
   
});
export default rootReducer;