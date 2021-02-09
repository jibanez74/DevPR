import { Auth } from 'aws-amplify';
import {
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

    const response = await Auth.signIn(username, password);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response,
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
export const logout = async () => {
  await Auth.signOut();
};
