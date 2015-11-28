import React, { Component, PropTypes } from 'react';

export default class NotificationsDetail extends Component {

  constructor(props) {
    super(props);
  }

  handleRemoveButtonClick(index) {
    this.props.onRemoveNotificationClick(index);
  }

  render() {
  	const { messages } = this.props;
    return (
      <div className="col-md-6">
      	<h3>Pending messages</h3>
        { messages.map( (message, index) => {
          const className = message.isNew ? 'alert alert-info' : 'alert alert-success';
          return (<div key={index} className={className} role="alert">
            <button type="button" className="close" onClick={ () => {this.handleRemoveButtonClick(message);}}><span>&times;</span></button>
            <strong>Info:</strong> {message.text} Created: {message.created.toUTCString()}
          </div>);
          }
        ) }
      </div>
    );
  }
}

NotificationsDetail.propTypes = {
  messages: PropTypes.array,
  onRemoveNotificationClick: PropTypes.func.isRequired
 };

 NotificationsDetail.defaultProps = { 
  messages: []
};
