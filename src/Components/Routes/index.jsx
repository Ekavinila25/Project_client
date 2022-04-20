import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import AppWrapper from "../AppWrapper";
import NotFound from "../NotFound";

const AppRoutes = () => {
  const routers = ["/deals", '/contacts', '/contacts/:id', '/etc', '/products'];
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Redirect to="/deals" />
        )}
      />
      {routers.map(route => <Route
        exact
        path={route}
        render={props => (
          <AppWrapper {...props} />
        )}
      />)}
      <Route path="*" component={NotFound} />
    </Switch>
  )
};

export default AppRoutes;