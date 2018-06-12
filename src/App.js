import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { ROUTES } from "./constants";
import FrontPage from "./FrontPage";
import FighterInfo from "./FighterInfo";
import { fighter } from "./FrontPage/reducer";
import { changeFighter } from "./FrontPage/actions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <Route exact path={ROUTES.frontPage} component={FrontPage} />
            <Route
              path={ROUTES.fighterInfo}
              render={props => <FighterInfo {...props} />}
            />
            <Redirect to={ROUTES.frontPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

//Transforms the current Redux store state into the props you want to pass to presentational component
const mapStateToProps = state => {
  return {
    fighter: state.fighter
  };
};
//Connects App to the Redux store
export default connect(
  mapStateToProps,
  { changeFighter }
)(App);
