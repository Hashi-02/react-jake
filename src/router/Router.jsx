import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components5/Home';
import { Page1 } from '../components5/Page1';
import { Page2 } from '../components5/Page2';
import { Page1DetailA } from '../components5/Page1DetailA';
import { Page1DetailB } from '../components5/Page1DetailB';
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route exact path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route exact path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
