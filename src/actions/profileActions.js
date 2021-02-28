import { PROFILE_API } from '../constants/apiConstants';
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAIL,
} from '../constants/profileConstants';

// get a user's profile
export const getProfile = sub => async dispatch => {
  try {
    dispatch({
      type: PROFILE_FETCH_REQUEST,
    });

    

    dispatch({
      type: PROFILE_FETCH_SUCCESS,
      payload: response.profile,
    });
  } catch (error) {
    console.error(error.message);

    dispatch({
      type: PROFILE_FETCH_FAIL,
      payload: error.message,
    });
  }
};

export const editProfile = profileData => async dispatch => {
  dispatch({
    tpe: EDIT_PROFILE_REQUEST,
  });

  try {
    await API.put(PROFILE_API, '/profiles', {
      body: { profileData },
      headers: {
        Authorization: '',
      },
    });
  } catch (error) {
    console.error(error.message);

    dispatch({
      type: EDIT_PROFILE_FAIL,
      payload: error.message,
    });
  }
};
