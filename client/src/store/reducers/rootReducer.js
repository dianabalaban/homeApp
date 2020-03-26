import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import arProductsReducer from "./ARProductsReducer"
let rootReducer = combineReducers({
    products: productsReducer, 
    arproducts: arProductsReducer   
});
export default rootReducer;