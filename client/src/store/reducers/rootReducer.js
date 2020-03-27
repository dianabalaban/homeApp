import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import arProductsReducer from "./ARProductsReducer"
import addNewProductReducer from "./addNewProductReducer"
import removeProductsReducer from './removeProductReducer'
import groceryReducer from './groceryReducer'

let rootReducer = combineReducers({
    products: productsReducer, 
    arproducts: arProductsReducer,
    newproduct:   addNewProductReducer,
    removeproduct: removeProductsReducer,
    groceries:groceryReducer
});
export default rootReducer;