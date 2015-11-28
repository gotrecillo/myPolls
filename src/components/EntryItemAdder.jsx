import React, { Component, PropTypes } from 'react';

export default class EntryItemAdder extends Component {

  constructor(props) {
    super(props);
    this.state = {addDisabled: true};
  }

  handleAddButtonClick() {
    this._addEntry.bind(this)();
  }

  handleKeyDown(e){
    const ENTER_KEY = 13;
    if (e.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this._addEntry.bind(this)();
    }
  }

  _addEntry(){
    const { poll, onAddEntryClick } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddEntryClick(poll.id, title);
    node.value = '';
    this.setState({addDisabled: true});
  }

  handleChangeTitle() {
    const node = this.refs.title;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }

  render() {
    return (
      <div className="input-group">
        <input 
          type="text"
          className="form-control"
          placeholder="Entry Title"
          ref="title"
          onChange={this.handleChangeTitle.bind(this)}
          onKeyDown={e => this.handleKeyDown(e)}
        />
        <span className="input-group-btn">
          <button 
            className="btn btn-info" 
            type="button" 
            onClick={e => this.handleAddButtonClick(e)}
            disabled={this.state.addDisabled}
            >Add Entry
          </button>
        </span>
      </div>
    );
  }
}

EntryItemAdder.propTypes = {
  onAddEntryClick: PropTypes.func,
  poll: PropTypes.object
};

EntryItemAdder.defaultProps = { 

};