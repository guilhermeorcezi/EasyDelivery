import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Page404 from './pages/Page404';
import Success from './components/SuccessPage';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ChooseUser from './pages/ChooseUser';
import Landing from './pages/Landing';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/success" component={Success} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/forgot-password" component={ForgotPassword} />
				<Route path="/choosing" component={ChooseUser} />
				<Route path="/Landing" component={Landing} />
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
