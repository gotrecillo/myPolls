import { connect } from 'react-redux';

import PollList from '../components/PollList';
import { addPoll, removePoll, changePollsPage } from '../actions';
import _ from 'lodash';

function mapStateToProps(state) {
  const { pollPagination, polls } = state;
  let shownPolls = _.sortBy(polls, poll => poll.title.toLowerCase())
                    .slice((pollPagination -1 ) * 10, (pollPagination -1 ) * 10 + 10);
  const totalPages = Math.ceil(polls.length / 10);
  return {
    totalPages,
    polls: shownPolls,
    pollPage: pollPagination,
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddPoll: title => dispatch(addPoll(title)),
    onRemovePoll: (idPoll, title) => dispatch(removePoll(idPoll, title)).catch(x=>x),
    onChangePage: (page) => dispatch(changePollsPage(page))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PollList);