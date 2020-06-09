import * as types from '../type';
import { toast } from 'react-toastify';
import axios from 'axios';
import { apiRoutes } from '../apiRoutes';

// LOGIN
export const auth_login = (user) => async dispatch => {
    try {
        dispatch(auth_loading());
        const res = await axios.post(apiRoutes.login, user);
        dispatch({
            type: types.LOGIN,
            payload: res.data
        });
        toast('Login Success');
        return true;
    } catch (err) {
        dispatch(auth_error(err));
        return false;
    }

}
// REGISTER
export const auth_register = (user) => async dispatch => {
    try {
        dispatch(auth_loading());
        const res = await axios.post(apiRoutes.register, user);
        dispatch({
            type: types.REGISTER,
            payload: res.data
        });
        toast('Register success. Please check your email to activate your account');
        return true;
    } catch (err) {
        dispatch(auth_error(err));
        return false;
    }
}
// SET AUTH USER
export const auth_set_user = () => async dispatch => {
    try {
        dispatch(auth_loading());
        const res = await axios.get(apiRoutes.authuser);
        dispatch({
            type: types.SET_AUTH_USER,
            payload: res.data
        });
        return true;
    } catch (err) {
        dispatch(auth_error(err));
        return false;
    }
}
// LOGOUT
export const auth_logout = () => async dispatch => {
    try {
        dispatch(auth_loading());
        const res = await axios.get(apiRoutes.logout);
        dispatch({
            type: types.LOGOUT,
            payload: res.data
        });
        return true;
    } catch (err) {
        dispatch(auth_error(err));
        return false;
    }
}
// LOADING
const auth_loading = () => {
    return {
        type: types.AUTH_LOADING,
    }
}
// ERROR
const auth_error = (error) => {
    if (error.statusCode === 500) {
        return {
            type: types.AUTH_ERROR,
            payload: 'An error occurred. Please try again Later.'
        }
    }
    if (error.response) {
        toast(error.response.data.error);
        return {
            type: types.AUTH_ERROR,
            payload: error.response.data.error
        }
    }
    return {
        type: types.AUTH_ERROR,
        payload: 'An error occurred. Please try again Later.'
    }
}