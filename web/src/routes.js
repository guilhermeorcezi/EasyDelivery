import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Page404 from './pages/Page404';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
