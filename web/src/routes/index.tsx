import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Page404 from '../pages/Page404';
//import Success from '../components/SuccessPage';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import DeliverymanList from '../pages/DeliverymanList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/dashboard" component={Main} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/list" component={DeliverymanList} isPrivate />
      <Route component={Page404} />
    </Switch>
  );
};

export default Routes;
