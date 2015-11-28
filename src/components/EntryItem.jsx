import React, { Component, PropTypes } from 'react';

export default class EntryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      titleError: false
    };
  }

  handleKeyDown(e){
    const ENTER_KEY = 13;
    const ESC_KEY = 27;
    if (e.keyCode === ENTER_KEY) {
      this._validateTitleAndEdit.bind(this)();
    }
    if (e.keyCode === ESC_KEY) {
      this.setState({editing: false, titleError: false});
    }
  }

  handleRemoveButtonClick(idEntry, title) {
    this.props.onRemoveEntryClick(idEntry, title);
  }

  handleEditClick() {
    const node = this.refs.title;
    const { entry } = this.props;

    this.setState({
      editing: true
    });

    node.value = entry.title;
    setTimeout(() => node.focus(), 0);
    setTimeout(() => node.setSelectionRange(0, node.value.length), 0);
  }

  handleCancelClick() {
    this.setState({
      editing: false, titleError:false
    });
  }

  handleOkClick() {
    this._validateTitleAndEdit.bind(this)();
  }

  _validateTitleAndEdit(){
    const node = this.refs.title;
    const { entry, onEditEntryTitleClick } = this.props;
    const title = node.value.trim();

    if(!title){
      this.setState({titleError: true});
      node.focus();
      node.value='';
      node.placeholder='Choose a entry name';
    }

    if(title){
      this.setState({titleError: false, editing: false});
      if(title !== entry.title){
        onEditEntryTitleClick(entry.id, node.value.trim());
      }
    }
  }

  render() {
    const { entry } = this.props;
    return (
      <li className={'list-group-item action-element'} >
        <div className="row">
          <div className={`col-lg-12 ${this.state.editing ? 'hidden' : ''}`}>   
            <span>{entry.title}
              <span 
                style={{'marginLeft': '20px'}}
                onClick={() => {this.handleEditClick();}}
                className={'glyphicon glyphicon-wrench action-icon'}
              />
            </span>
            <span
              onClick={() => this.handleRemoveButtonClick(entry.id, entry.title)}
              className={'pull-right glyphicon glyphicon-trash action-icon'}
            />
          </div>
          <div className={`col-lg-12 ${this.state.editing ? '' : 'hidden'}`}>   
            <div className={`input-group ${this.state.editing ? '' : 'hidden'} ${this.state.titleError ? 'has-error' : ''}`}>
              <input 
                className="form-control"
                ref="title"
                onKeyDown={e => this.handleKeyDown(e)}
              />
              <span className="input-group-btn">
                <button className="btn btn-danger" type="button" onClick={e => this.handleCancelClick(e)}><span className="glyphicon glyphicon-remove" /></button>
                <button className="btn btn-success" type="button" onClick={e => this.handleOkClick(e)}><span className="glyphicon glyphicon-ok" /></button>
              </span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

EntryItem.propTypes = {
  entry: PropTypes.object,
  onRemoveEntryClick: PropTypes.func,
  onEditEntryTitleClick: PropTypes.func
};

EntryItem.defaultProps = { 
  entry: {}
};