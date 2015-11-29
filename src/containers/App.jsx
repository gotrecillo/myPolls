import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import NotificationsContainer from './NotificationsContainer';
import ConfirmDialogContainer from './ConfirmDialogContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({active: 2});
  }

  handleClick(num){
    this.setState({active: num});
  }

  render() {
    return (
      <div>
      	<h1 className="text-center">Welcome to Poll App</h1>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li 
              className={`${this.state.active === 0 ? 'active-tab' : ''}`}
              onClick={this.handleClick.bind(this, 0)}>
              <Link to="/poll">Show Polls</Link>
            </li>
            <li 
              className={`${this.state.active === 1 ? 'active-tab' : ''}`}
              onClick={this.handleClick.bind(this, 1)}>
              <Link to="/">Hide Polls</Link>
            </li>
            <li
              className={`${this.state.active === 2 ? 'active-tab' : ''}`}
              onClick={this.handleClick.bind(this, 2)}>
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