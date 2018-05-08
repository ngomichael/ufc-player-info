import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { ROUTES } from "./constants";
import FrontPage from "./FrontPage";
import FighterInfo from "./FighterInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={ROUTES.frontPage} component={FrontPage} />
          <Route path={ROUTES.fighterInfo} component={FighterInfo} />
          <Redirect to={ROUTES.frontPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
