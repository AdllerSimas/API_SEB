import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PageA from '../pages/PageA';
import PageB from '../pages/PageB';
import PageC from '../pages/PageC';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/"  component={PageA} />
    <Route path="/pageb" component={PageB} />
    <Route path="/pagec" component={PageC} />
  </Switch>
);

export default Routes;