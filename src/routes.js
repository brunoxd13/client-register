import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import InformarCpf from "./pages/informarCpf";
import Identificacao from "./pages/identificacao";
import Contato from "./pages/contato";
import Endereco from "./pages/endereco";
import Final from "./pages/final";
// import Login from "./pages/login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <InformarCpf />} />
      <Route path="/identificacao" component={() => <Identificacao />} />
      <Route path="/contato" component={() => <Contato />} />
      <Route path="/endereco" component={() => <Endereco />} />
      <Route path="/final" component={() => <Final />} />
      {/*<Route path="/log" component={() => <Login />} />*/}

      <Route path="*" component={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
