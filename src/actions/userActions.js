import { Auth } from 'aws-amplify';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

// register a new user with cognito using email as the username, and a password
export const classicRegister = (
  name,
  username,
  password,
  password2
) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    if (password !== password2) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: 'Passwords do not match',
      });
    } else {
      await Auth.signUp({
        username,
        password,
        attributes: {
          name,
        },
      });

      dispatch({
        type: USER_REGISTER_SUCCESS,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message,
    });
  }
};

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
    });
  }
};

// resend confirmation code
export const resendConfirmationCode = async username => {
  await Auth.resendSignUp(username);
};

// user logout
export const logout = async () => {
  await Auth.signOut();
};
