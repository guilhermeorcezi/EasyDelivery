import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

import Login from './pages/Login'
import Page404 from './pages/Page404'

function Routes() {
  return (
      <BrowserRouter>
      <Route path="/" component={Login}/>
      <Route component={Page404}/>
      </BrowserRouter>
  )
}

export default Routes;