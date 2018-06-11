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
import { fighter } from "./FrontPage/reducer";
import { changeFighter } from "./FrontPage/actions";
import { connect } from "react-redux";

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

//Transforms the current Redux store state into the props you want to pass to presentational component
const mapStateToProps = state => {
  return {
    fighter: state.fighter
  };
};
//Connects FrontPage to the Redux store
export default connect(
  mapStateToProps,
  { changeFighter }
)(App);

// export default App;
