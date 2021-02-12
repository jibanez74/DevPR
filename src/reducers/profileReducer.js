import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
} from '../constants/profileConstants';

export const fetchProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_FETCH_REQUEST:
      return {
        tloading: true,
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
