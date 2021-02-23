import { API } from 'aws-amplify';
import { PROFILE_API } from '../constants/apiConstants';
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAIL,
} from '../constants/profileConstants';

export const getProfile = sub => async dispatch => {
  dispatch({
    type: PROFILE_FETCH_REQUEST,
  });

  try {
    const { profiles } = await API.get(PROFILE_API, `/profiles`);

    dispatch({
      type: PROFILE_FETCH_SUCCESS,
      payload: profiles,
    });
  } catch (error) {
    alert(error.message);

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
