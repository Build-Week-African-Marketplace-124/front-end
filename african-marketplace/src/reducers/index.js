import { combineReducers } from "redux";
import {postUserReducer} from './postUsersReducer'
import ProductsReducer from "./ProductsReducer";

export const rootReducer = combineReducers({
    postUserReducer,
    ProductsReducer
})