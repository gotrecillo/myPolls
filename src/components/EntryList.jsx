import React, { Component, PropTypes } from 'react';
import EntryItemAdder from './EntryItemAdder';
import EntryItem from './EntryItem';

export default class EntryList extends Component {

  constructor(props) {
    super(props);
  }

  handleRemoveButtonClick(idEntry) {
    this.props.onRemoveEntryClick(idEntry);
  }

  render() {
    const { entries } = this.props;

    return (
      <div className="panel-body">
          <h3>Entry Title</h3>
          <ul className="list-group">
            {
              entries.map( (entry, index) => <EntryItem onRemoveEntryClick={this.props.onRemoveEntryClick} entry={entry} key={index}/> )
            }
          </ul>
          <EntryItemAdder onAddEntryClick={this.props.onAddEntryClick} poll={this.props.poll} />
      </div>
    );
  }
}

EntryList.propTypes = {
  poll: PropTypes.object.isRequired,
  entries: PropTypes.array,
  onAddEntryClick: PropTypes.func.isRequired,
  onRemoveEntryClick: PropTypes.func.isRequired
};

EntryList.defaultProps = { 
  entries: []
};