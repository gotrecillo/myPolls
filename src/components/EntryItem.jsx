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
      <li>
        {entry.title}
        <button
          onClick={() => {this.handleRemoveButtonClick(entry.id, entry.title);}} 
          className="btn btn-warning">
          Remove
        </button>
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