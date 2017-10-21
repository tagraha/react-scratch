import express from 'express'
import React from 'react'
import fetch from 'node-fetch'
import { RenderToString } from 'react-dom/server'
import sourceMapSupport from 'source-map-support'
import { StaticRouter as Router, matchPath } from 'react-router'
import render from './render'

import App from './../client/js/App'
import Error from './../components/Error'

sourceMapSupport.install();

// Create app
const app = express();

//set port
const port = process.env.PORT || 8080;

// app.get('*', (req, res) => {
//   res.send({hello: 'world'})
// })

const routes = [
  '/',
  '/home',
  '/tirta'
];

app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  if (!match) {
      res.status(404).send(render(<Error />));
      return;
  }
  fetch('https://api.github.com/gists')
      .then(r => r.json())
      .then(gists => 
        res.status(200).send(render(
          (
            <Router context={{}} location={req.url}>
              <App gists={gists} />
            </Router>
          ), gists
        ))
      )
});

// start app
app.listen(port, () => {
  console.info(
    `🌎  Listening on port ${port} in ${process.env
      .NODE_ENV} mode on Node ${process.version}.`
  );
});