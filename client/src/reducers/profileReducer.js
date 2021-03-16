import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAIL,
} from '../constants/profileConstants';

export const fetchProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_FETCH_REQUEST:
      return {
        loading: true,
      };
    case PROFILE_FETCH_SUCCESS:
      return {
        loading: false,
        profile: payload,
      };
    case PROFILE_FETCH_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const editProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_EDIT_REQUEST:
      return {
        loading: true,
      };
    case PROFILE_EDIT_SUCCESS:
      return {
        loading: false,
        success: payload,
      };
    case PROFILE_EDIT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
