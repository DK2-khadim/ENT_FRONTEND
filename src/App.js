import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.scss";
import "./assets/css/demo.css";
import Etudiant from "./modules/Etudiant/index";
import Finance from "./modules/Finance/index";
import Enseignant from "./modules/Enseignant/index";
import Scolarite from "./modules/Scolarite/index";
import Biblio from "./modules/Bibliotheque/index";
import Admin from "./modules/Admin/index";
import Login from "./modules/Auth/Login/login";


const hist = createBrowserHistory();


function App() {
  return (
    <Router history={hist}>
        <Switch>
        <Route path="/finance" render={(props) => <Finance {...props} />} />
        <Route path="/etudiant" render={(props) => <Etudiant {...props} />} />
        <Route path="/enseignant" render={(props) => <Enseignant {...props} />} />
        <Route path="/bibliotheque" render={(props) => <Biblio {...props} />} />
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Route path="/scolarite" render={(props) => <Scolarite {...props} />} />
        <Route path="" component={Login} />
        <Redirect to="/" />
        </Switch>
    </Router>
  )
}

export default App;
