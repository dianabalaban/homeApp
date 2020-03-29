import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import arProductsReducer from "./ARProductsReducer"
import addNewProductReducer from "./addNewProductReducer"
import removeProductsReducer from './removeProductReducer'
import groceryReducer from './groceryReducer'
import addNewGroceryReducer from './addNewGroceryReducer'
import updateGrocery from './updateGroceryReducer'
import removeGroceryReducer from './removeGroceryReducer'

let rootReducer = combineReducers({
    products: productsReducer, 
    arproducts: arProductsReducer,
    newproduct:   addNewProductReducer,
    removeproduct: removeProductsReducer,
    groceries:groceryReducer,
    newgrocery:addNewGroceryReducer,
    updategrocery:updateGrocery,
    removeGroceryReducer: removeGroceryReducer
});
export default rootReducer;