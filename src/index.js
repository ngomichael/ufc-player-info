//Render App.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import { fighter } from "../src/FrontPage/reducer";
import FrontPage from "./FrontPage";
// import App from "./App";

const root = document.getElementById("root");
let store = createStore(fighter);

//Want to render App.js instead, what do you do with <Provider></Provider>?
ReactDOM.render(
  // <Provider store={store}>
  <App store={store} />,
  // </Provider>,
  root
);
registerServiceWorker();
