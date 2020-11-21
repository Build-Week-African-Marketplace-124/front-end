import { combineReducers } from "redux";
import {postUserReducer} from './postUsersReducer'
import {productsReducer} from "./ProductsReducer";

export const rootReducer = combineReducers({
    postUserReducer,
    productsReducer
})