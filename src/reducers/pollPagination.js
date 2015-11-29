import { CHANGE_POLLS_PAGE } from '../actions';

function changePollsPage(state, page) {
  return page;
}

export default function pollPaginationReducer(state = 0, action) {
  switch (action.type) {
    case CHANGE_POLLS_PAGE:
      return changePollsPage(state, action.page);
    default:
      return state;
  }
  
}