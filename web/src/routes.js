import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Page404 from './pages/Page404';
import Success from './components/SuccessPage';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Profile from './pages/Profile';
import DeliverymanList from './pages/DeliverymanList';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/login" component={Login} />
				<Route path="/success" component={Success} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/forgot-password" component={ForgotPassword} />
				<Route path="/main" component={Main} />
				<Route path="/profile" component={Profile} />
				<Route path="/list" component={DeliverymanList} />
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
