import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);
