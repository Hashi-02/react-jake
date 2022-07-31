import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Top } from '../pages/Top';
import { Users } from '../pages/Users';
import { DefaultLayouts } from '../templates/DefaultLayouts';
import { HeaderOnly } from '../templates/HeaderOnly';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayouts>
            <Top />
          </DefaultLayouts>
        </Route>
        <Route path="/user">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
