import axios from 'axios';
import { forceLogout } from './userActions';
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT_FAIL,
  PROFILE_EDIT_SUCCESS,
} from '../constants/profileConstants';
import API_URL from '../constants/apiConstants';

// wil get the profile for an authenticated user
export const getAuthProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_FETCH_REQUEST,
    });

    const token = getState().userLogin.user.signInUserSession.accessToken
      .jwtToken;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/profile/me`, config);

    dispatch({
      type: PROFILE_FETCH_SUCCESS,
      payload: data.profile,
    });
  } catch (error) {
    forceLogout(error, PROFILE_FETCH_FAIL);
  }
};

// edit or create a profile
export const editProfile = (profileData, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PROFILE_FETCH_REQUEST,
    });

    const token = getState().userLogin.user.signInUserSession.accessToken
      .jwtToken;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    await axios.put(`${API_URL}/profile/me`, profileData, config);

    dispatch({
      type: PROFILE_EDIT_SUCCESS,
      payload: data.success,
    });

    history.pushState('/dashboard');
  } catch (error) {
    forceLogout(error, PROFILE_EDIT_FAIL);
  }
};
