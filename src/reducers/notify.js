import { REMOVE_NOTIFICATION } from '../actions';
import { ROUTER_DID_CHANGE } from 'redux-router/lib/constants';
import _ from 'lodash';

function removeNotification(state, action) {
  return state.filter( (message) => !_.isEqual(message, action) );
}

function addNotification(state, action) {
  return action.meta && action.meta.notify ? state.concat({
        text: action.type,
        level: action.meta.notify.level,
        created: new Date,
        pending: true,
        isNew: true
      }) : state;
}

function setAsReaded(state, path) {
  return path !== '/notifications' ? state : state.map( message => Object.assign({}, message, message.pending ? {pending: false} : {isNew: false}));
}

export default function notifyReducer(state = [], action) {
  switch (action.type) {
    case REMOVE_NOTIFICATION:
      return removeNotification(state, action.notification);
    case ROUTER_DID_CHANGE:
      return setAsReaded(state, action.payload.location.pathname);
    default:
      return addNotification(state, action);
  }
  
}