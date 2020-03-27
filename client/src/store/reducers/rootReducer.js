import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import arProductsReducer from "./ARProductsReducer"
import addNewProductReducer from "./addNewProductReducer"
import removeProductsReducer from './removeProductReducer'
let rootReducer = combineReducers({
    products: productsReducer, 
    arproducts: arProductsReducer,
    newproduct:   addNewProductReducer,
    removeproduct: removeProductsReducer
});
export default rootReducer;