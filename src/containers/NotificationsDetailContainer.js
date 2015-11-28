import { connect } from 'react-redux';
import { removeNotification } from '../actions';

import NotificationsDetail from '../components/NotificationsDetail';

function mapStateToProps(state) {
  return {
    messages: state.messages.slice().reverse()
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onRemoveNotificationClick: (notification) => dispatch(removeNotification(notification))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NotificationsDetail);