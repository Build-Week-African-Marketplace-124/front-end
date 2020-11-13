import { initialState } from "./postUsersReducer";

export const START_GETTING_USER = "START_GETTING_USER";
export const SUCCESS_GETTING_USER = "SUCCESS_GETTING_USER";
export const ERROR_GETTING_USER = "ERROR_GETTING_USER";

export const getUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GETTING_USER:
            return {
                ...state,
            };
        case SUCCESS_GETTING_USER:
            return {
                ...state,
                id: action.payload.id,
                userName: action.payload.first_name,
                password: action.payload.last_name,
            }
        case ERROR_GETTING_USER:
            return {
                ...state,
            }
        default:
            return state;
    }
}