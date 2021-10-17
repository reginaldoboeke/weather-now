import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);
