import { combineReducers } from 'redux';
import gifs from './reducers/gifs';
import authUser from './reducers/authUser';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  gifs,
  authUser,
  common,
  router: routerReducer
});