import axios from 'axios';
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
} from '../constants/profileConstants';

// get a user's profile
export const getProfile = () => async (dispatch, getState) => {
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
    console.error(error.message);

    dispatch({
      type: PROFILE_FETCH_FAIL,
      payload: error.message,
    });
  }
};
