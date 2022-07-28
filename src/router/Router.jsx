import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components5/Home';
import { Page2 } from '../components5/Page2';
import { page1Routes } from './Page1Routes';
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
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.childlen}
              </Route>
            ))}
            {/* <Route exact path={url}>
              <Page1 />
            </Route>
            <Route exact path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route exact path={`${url}/detailB`}>
              <Page1DetailB />
            </Route> */}
          </Switch>
        )}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
