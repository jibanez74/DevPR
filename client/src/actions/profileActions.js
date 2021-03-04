import axios from 'axios';
import { API_URL } from '../constants/apiConstants';
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
} from '../constants/profileConstants';

// get a user's profile
export const getProfile = sub => async dispatch => {
  try {
    dispatch({
      type: PROFILE_FETCH_REQUEST,
    });

    const { data } = await axios.get(`${API_URL}/profile/${sub}`);

    dispatch({
      type: PROFILE_FETCH_SUCCESS,
      payload: data.profile,
    });
  } catch (error) {
    console.error(error.message);

    dispatch({
      type: PROFILE_FETCH_FAIL,
      payload: error.message,
    });
  }
};

// create or edit a profile
export const editProfile = profileData => async (dispatch, getState) => {
  try {
    dispatch({
      type: EDIT_PROFILE_REQUEST,
    });

    const token = getState().userLogin.user.signInUserSession.accessToken
      .jwtToken;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(`${API_URL}/profile`, profileData, config);

    alert(data.success);

    dispatch({
      type: EDIT_PROFILE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: EDIT_PROFILE_FAIL,
    });
  }
};
