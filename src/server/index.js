import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from '../shared/routes';
import configureStore from '../shared/configureStore';
import App from '../shared/App';
import sourceMapSupport from 'source-map-support';
import offline from './offline';
import reactHelmet from 'react-helmet';
import HTML from './html';

const sheet = new ServerStyleSheet();

if (process.env.NODE_ENV === 'development') {
  sourceMapSupport.install();
}

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.static('static'));

app.get('*', (req, res, next) => {
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

      const reactApp = (
        <AsyncComponentProvider asyncContext={asyncContext}>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>

              <StyleSheetManager sheet={sheet.instance}>
                <App />
              </StyleSheetManager>

            </StaticRouter>
          </Provider>
        </AsyncComponentProvider>
      );

      // This makes sure we "bootstrap" resolve any async components prior to rendering
      asyncBootstrapper(reactApp).then(() => {
        const markup = renderToString(reactApp);

        // Get the async component state.
        const asyncState = asyncContext.getState();

        const initialData = store.getState();

        const head = reactHelmet.rewind();

        res.send(HTML(head, markup, initialData, asyncState, offline));

      });
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening'); // eslint-disable-line no-console
});
