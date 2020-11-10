import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";


import Etudiant from "./index";
const hist = createBrowserHistory();

class WorkSpaceEtudiant extends Component {

    render(){
        return(
            <Router history={hist}>
            <Switch>
            <Route path="/etudiant" render={(props) => <Etudiant {...props} />} />
            <Redirect to="/etudiant/dashboard" />
            </Switch>
            </Router>
        )
    }
}

export default WorkSpaceEtudiant