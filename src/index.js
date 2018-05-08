//Render App.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import FrontPage from "./FrontPage";
import { fighter } from "../src/FrontPage/reducer";

const root = document.getElementById("root");
let store = createStore(fighter);

ReactDOM.render(
  <Provider store={store}>
    <FrontPage />
  </Provider>,
  root
);
registerServiceWorker();
