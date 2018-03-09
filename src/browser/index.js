import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../shared/configureStore";
import App from "../shared/App";

const store = configureStore(window.__initialData__);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);