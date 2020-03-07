import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import Questions from '../pages/Questions';
import Cards from '../pages/Cards';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/questions">
        <Questions />
      </Route>
      <Route path="/cards">
        <Cards />
      </Route>
    </Switch>
  );
}
