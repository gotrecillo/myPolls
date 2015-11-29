import React, { Component, PropTypes } from 'react';
import PollItem from './PollItem';
import PaginationNav from './PaginationNav';

export default class PollList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addDisabled: true
    };
  }

  handleAddButtonClick() {
    const { onAddPoll } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddPoll(title);
    node.value = '';
    this.setState({
      addDisabled: true
    });
  }

  handleOnChangeTitle() {

    const node = this.refs.title;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }

  handleOnTitleKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleAddButtonClick();
    }
  }

  _getPaginationBar(){
    const { pollPage, totalPages, onChangePage } = this.props;
    return (
      <PaginationNav
        actualPage={pollPage}
        totalPages={totalPages}
        onChangePage={onChangePage} 
      />
    );
  }

  render() {

    const { polls, onRemovePoll, totalPages } = this.props;
    const paginationBar = totalPages > 1 ? this._getPaginationBar() : '';

    return (
      <div className="row">
        <div className="col-md-12">
          {paginationBar}
          <h3>Poll Title</h3>
          <ul className="list-group">
            {
              polls.map( (poll, index) =>  <PollItem key={index} poll={poll} onRemovePoll={onRemovePoll} /> )
            }
          </ul>
          {paginationBar}
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Pull Title" ref="title" onKeyDown={e => this.handleOnTitleKeyDown(e)} onChange={e => this.handleOnChangeTitle(e)}/>
            <span className="input-group-btn">
              <button disabled={this.state.addDisabled} className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-ok-sign" /></button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

PollList.propTypes = {
  polls: PropTypes.array,
  totalPages: PropTypes.number,
  pollPage: PropTypes.number,
  onAddPoll: PropTypes.func.isRequired,
  onRemovePoll: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired
};

PollList.defaultProps = { 
  polls: []
};