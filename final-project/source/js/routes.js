import React from 'react';
import { browserHistory, Router, Route, Redirect } from 'react-router';

import makeMainRoutes from './components/views/routes.js';

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Route path=''>
      {main}
    </Route>
  )
}

export default makeRoutes;
