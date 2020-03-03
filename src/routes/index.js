import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import Questions from '../pages/Questions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/questions">
        <Questions />
      </Route>
    </Switch>
  );
}
