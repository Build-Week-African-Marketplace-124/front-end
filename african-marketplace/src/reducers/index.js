import { combineReducers } from "redux";
import {postUserReducer} from './postUsersReducer'

export const rootReducer = combineReducers({
    postUserReducer,
})