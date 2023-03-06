import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reservas from './pages/Reservas/Reservas';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservas" exact component={Reservas} />
    </Switch>
  );
};

export default Routes;
