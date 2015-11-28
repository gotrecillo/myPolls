import React, { Component, PropTypes } from 'react';
import EntryItemAdder from './EntryItemAdder';

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
              entries.map( (entry, index) => <li key={index}>{entry.title}<button onClick={() => this.handleRemoveButtonClick(entry.id)} className="btn btn-warning">Remove</button></li> )
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