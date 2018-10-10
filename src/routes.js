import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import InformarCpf from "./pages/informarCpf";
import Identificacao from "./pages/identificacao";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <InformarCpf />} />
      <Route path="/identificacao" component={() => <Identificacao />} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
