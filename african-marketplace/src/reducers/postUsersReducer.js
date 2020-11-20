export const initialState = {
    id: '',
    username: '',
    password: '',
    department: '',
}

export const START_POSTING_USER = "START_POSTING_USER";
export const SUCCESS_POSTING_USER = "SUCCESS_POSTING_USER";
export const ERROR_POSTING_USER = "ERROR_POSPostSING_USER";
export const SUCCESS_DELETING_USER = "SUCCESS_DELETING_USER";

export const postUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_POSTING_USER:
            return {
                ...state
            };
        case SUCCESS_POSTING_USER:
            return {
                ...state,
                id: action.id,
                userName: action.payload.username,
                password: action.payload.password,
                department: action.payload.department,
            };
        case ERROR_POSTING_USER:
            return {
                ...state,
            };
        case SUCCESS_DELETING_USER:
            return {
                state,
            };
        default:
            return state;
    }
}