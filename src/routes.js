import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import PollListContainer from './containers/PollListContainer';
import PollDetailsContainer from './containers/PollDetailsContainer';
import NotificationsDetailContainer from './containers/NotificationsDetailContainer';

export default (
  <Route path="/" component={App}>
  	<Route path="poll" component={PollListContainer} />
    <Route path="poll/:idPoll" component={PollDetailsContainer} />
    <Route path="notifications" component={NotificationsDetailContainer} />
    <Redirect path="*" to="/" />
  </Route>
);