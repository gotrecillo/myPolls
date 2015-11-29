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
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/poll">Show Polls</Link>
            </li>
            <li>
              <NotificationsContainer/>
            </li>
          </ul>
        </nav>
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