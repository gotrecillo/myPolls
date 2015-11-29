import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import polls from './poll';
import entries from './entry';
import messages from './notify';
import actionsPending from './confirm';
import pollPagination from './pollPagination';

const pollApp = combineReducers({
  polls,
  entries,
  router,
  messages,
  pollPagination,
  actionsPending
});

export default pollApp;