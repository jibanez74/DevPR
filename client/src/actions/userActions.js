import { Auth } from 'aws-amplify';
import {
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

// classic login with email and password
export const classicLogin = (username, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    await Auth.signIn(username, password);
    const user = await Auth.currentAuthenticatedUser();

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error.message);
    }

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

// user logout
export const logout = () => async dispatch => {
  await Auth.signOut();
  dispatch({
    type: USER_LOGOUT,
  });
  document.location.href = '/login';
};

// force logout
export const forceLogout = (error, type) => dispatch => {
  const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;

  if (process.env.NODE_ENV === 'development') {
    console.error(message);
  }

  if (message === 'Not authorized') {
    dispatch(logout());
  }

  dispatch({
    type,
    payload: message,
  });
};

// get current auth user
export const loadUser = () => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const user = await Auth.currentAuthenticatedUser();

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    forceLogout(error, USER_LOGIN_FAIL);
  }
};
