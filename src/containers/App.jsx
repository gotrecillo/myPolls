import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import NotificationsContainer from './NotificationsContainer';
import ConfirmDialogContainer from './ConfirmDialogContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1 className="text-center">Welcome to Poll App</h1>

          <ul className="nav nav-tabs nav-justified text-center">
            <li role="presentation"><Link to="/poll">Show Polls</Link></li>
            <li role="presentation"><Link to="/">Hide Polls</Link></li>
            <li role="presentation"><NotificationsContainer/></li>
          </ul>
          <div>
            <ConfirmDialogContainer/>
          </div>
  	    {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};