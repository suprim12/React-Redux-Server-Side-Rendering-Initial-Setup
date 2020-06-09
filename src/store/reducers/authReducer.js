import * as types from '../type';


const intialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    error: null,
}
export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isAuthenticated: action.payload,
                loading: false,
                error: null,
            }
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                error: null,
                loading: false
            }
        case types.REGISTER:
            return {
                ...state,
                error: null,
                loading: false
            }
        case types.SET_AUTH_USER: {
            return {
                ...state,
                user: action.payload.user,
                loading: false,
                error: null
            }
        }
        case types.AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.AUTH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}