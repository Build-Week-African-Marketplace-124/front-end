import { combineReducers } from "redux";
import {getUserReducer} from './getUserReducer'
import {postUserReducer} from './postUsersReducer'

export const rootReducer = combineReducers({
    getUserReducer,
    postUserReducer,
})