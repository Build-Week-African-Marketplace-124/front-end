export const initialState = {
    id: '',
    userName: '',
    password: '',
    isLoggedIn: false,
}

export const START_POSTING_USER = "START_POSTING_USER";
export const SUCCESS_POSTING_USER = "SUCCESS_POSTING_USER";
export const ERROR_POSTING_USER = "ERROR_POSPostSING_USER";

export const postUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_POSTING_USER:
            return {
                ...state
            };
        case SUCCESS_POSTING_USER:
            return {
                ...state,
                id: action.payload.id,
                userName: action.payload.first_name,
                password: action.payload.last_name,
                isLoggedIn: state.isLoggedIn,
            }
        case ERROR_POSTING_USER:
            return {
                ...state,
            }
        default:
            return state;
    }
}