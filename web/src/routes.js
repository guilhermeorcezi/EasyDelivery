import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Page404 from './pages/Page404';
import Success from './pages/SignUp/Success';
import SignUp from './pages/SignUp';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/success" exact component={Success} />
				<Route path="/sign-up" exact component={SignUp} />
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
