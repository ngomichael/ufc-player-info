//Render App.js
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import { createStore } from "redux";
import { fighter } from "../src/FrontPage/reducer";

const root = document.getElementById("root");
export const store = createStore(fighter);

ReactDOM.render(<App store={store} />, root);
registerServiceWorker();
