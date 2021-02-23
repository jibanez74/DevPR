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

    console.log(user);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    console.error(error);

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

// get current auth user
export const getAuthUser = () => async dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  try {
    await Auth.currentSession();
    const user = await Auth.currentAuthenticatedUser();

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};
