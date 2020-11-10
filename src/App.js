import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.scss";
import "./assets/css/demo.css";
import Etudiant from "./modules/Etudiant/index";
const hist = createBrowserHistory();


function App() {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/etudiant" render={(props) => <Etudiant {...props} />} />
      <Redirect to="/etudiant/dashboard" />
    </Switch>
  </Router>
  );
}

export default App;
