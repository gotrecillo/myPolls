import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollDetails from '../components/PollDetails';
import EntryList from '../components/EntryList';

import { addEntry, removeEntry, removePollAndNavigate, editPollTitle, editEntryTitle } from '../actions';

class PollDetailsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  	return (
      <div className="row">
        <div className="col-md-6">
    		  <div className="panel panel-default">
    			 <PollDetails { ...this.props } />
    			 <EntryList { ...this.props }/>
    		  </div>
        </div>
      </div>
  	);
  }	
}

function mapStateToProps(state) {
  const idPoll = state.router.params.idPoll;
  const poll = state.polls.filter( poll => idPoll === poll.id)[0] || {};
  const entries = Object.values(state.entries).filter( entry =>  entry.idPoll === poll.id );
  return { poll, entries };
}

function mapDispatchToProps(dispatch) {
  return {
  	onAddEntryClick: (idPoll, title) => dispatch(addEntry(idPoll, title)),
    onRemoveEntryClick: (idEntry, title) => dispatch(removeEntry(idEntry, title)).catch(_ => _),
    onRemovePollClick: (idPoll, title) => dispatch(removePollAndNavigate(idPoll, title)),
    onEditPollTitleClick: (idPoll, newTitle) => dispatch(editPollTitle(idPoll, newTitle)),
    onEditEntryTitleClick: (idEntry, newTitle) => dispatch(editEntryTitle(idEntry, newTitle)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetailsContainer);