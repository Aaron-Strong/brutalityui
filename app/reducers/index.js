import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './auth';
import rightbar from './rightbar';

const rootReducer = combineReducers({
  router,
  auth,
  rightbar
});

export default rootReducer;
