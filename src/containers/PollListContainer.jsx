import { connect } from 'react-redux';

import PollList from '../components/PollList';
import { addPoll, removePoll } from '../actions';
import _ from 'lodash';

function mapStateToProps(state) {
  const { pollPagination, polls } = state;
  let shownPolls = _.sortBy(polls, poll => poll.title.toLowerCase());
  return {
    polls: shownPolls
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddPoll: title => dispatch(addPoll(title)),
    onRemovePoll: (idPoll, title) => dispatch(removePoll(idPoll, title)).catch(x=>x)
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PollList);