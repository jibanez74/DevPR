import axios from 'axios';
import { forceLogout } from './userActions';
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
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
