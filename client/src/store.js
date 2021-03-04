import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userReducers';
import {
  fetchProfileReducer,
  editProfileReducer,
} from './reducers/profileReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  fetchProfile: fetchProfileReducer,
  editProfile: editProfileReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
