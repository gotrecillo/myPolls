import React, { Component, PropTypes } from 'react';

export default class EntryItem extends Component {

  constructor(props) {
    super(props);
  }

  handleRemoveButtonClick(idEntry, title) {
    this.props.onRemoveEntryClick(idEntry, title);
  }

  render() {
    const { entry } = this.props;
    return (
      <li className={'list-group-item action-element'} >
        <div className="row">
          <div className="col-lg-12">   
            <span>{entry.title}</span>
            <span onClick={() => this.handleRemoveButtonClick(entry.id, entry.title)} className={'pull-right glyphicon glyphicon-trash action-icon'}/>
          </div>
        </div>
      </li>
    );
  }
}

EntryItem.propTypes = {
  entry: PropTypes.object,
  onRemoveEntryClick: PropTypes.func
};

EntryItem.defaultProps = { 
  entry: {}
};