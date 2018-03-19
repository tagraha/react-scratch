import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../shared/configureStore";
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import Loadable from 'react-loadable';
import App from "../shared/App";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__initialData__;

// Get any "rehydrate" state sent back by the server
const rehydrateState = window.ASYNC_COMPONENTS_STATE;

// Allow the passed state to be garbage-collected
delete window.__initialData__;
delete window.ASYNC_COMPONENTS_STATE;

const store = configureStore(preloadedState);

const app = (
  <AsyncComponentProvider  rehydrateState={rehydrateState}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AsyncComponentProvider>
);

Loadable.preloadReady().then(() => {
  asyncBootstrapper(app).then(() => {
    // Render the app
    hydrate(
      app,
      document.getElementById("root")
    );
  });
});

(function() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/scratch-worker.js');
  }
})();