import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
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
    case EDIT_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case EDIT_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
