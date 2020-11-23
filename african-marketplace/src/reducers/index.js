import { combineReducers } from "redux";
import {postUserReducer} from './postUsersReducer'
import {productsReducer} from "./ProductsReducer";
import {cartReducer} from "./ShoppingReducer";

export const rootReducer = combineReducers({
    postUserReducer,
    productsReducer,
    cartReducer
})