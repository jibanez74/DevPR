import { API } from 'aws-amplify';
import { PROFILE_API } from '../constants/profileConstants';
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
} from '../constants/profileConstants';

export const getProfile = (sub = async dispatch => {
  dispatch({
    type: PROFILE_FETCH_REQUEST,
  });

  try {
    const profile = await API.get(PROFILE_API, `/api/v1/profile/${sub}`);

    dispatch({
      type: PROFILE_FETCH_SUCCESS,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_FETCH_FAIL,
      payload: error.message,
    });
  }
});
