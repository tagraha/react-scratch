import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import configureStore from "../shared/configureStore";
import App from "../shared/App";
import sourceMapSupport from "source-map-support";
import offline from './offline';
import reactHelmet from 'react-helmet';

if(process.env.NODE_ENV === 'development') {
  sourceMapSupport.install();
}

const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.static("static"));

app.get("*", (req, res, next) => {
  const store = configureStore();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};

      // Create the async context for our provider, this grants
      // us the ability to tap into the state to send back to the client.
      const asyncContext = createAsyncContext();

      const app = (
        <AsyncComponentProvider asyncContext={asyncContext}>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        </AsyncComponentProvider>
      );

      // This makes sure we "bootstrap" resolve any async components prior to rendering
      asyncBootstrapper(app).then(() => {
        const markup = renderToString(app);

        // Get the async component state.
        const asyncState = asyncContext.getState();

        const initialData = store.getState();

        let head = reactHelmet.rewind();

        res.send(`<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              ${head.title}
              ${head.meta}
              ${head.link}
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
              <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
              <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png">
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
              <meta name="msapplication-TileColor" content="#2d89ef">
              <meta name="theme-color" content="#ffffff">
              
              <link rel="stylesheet" href="/css/main.css">
              <link rel="manifest" href="/manifest.json">
            </head>
            <body>
              <div id="root">${markup}</div>
              <script src="/bundle.js" defer></script>
              <script>window.__initialData__ = ${serialize(initialData)}</script>
              <script type="text/javascript">
                // Serialise the state into the HTML response
                window.ASYNC_COMPONENTS_STATE = ${serialize(asyncState)}
              </script>
              <script type="text/javascript">${offline.serviceWorker}</script>
            </body>
          </html>
        `);
      });
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening"); // eslint-disable-line no-console
});