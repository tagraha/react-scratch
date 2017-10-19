***Minimal setup for react, webpack, babel***
```bash
git clone git@github.com:tagraha/react-scratch.git
```

```bash
npm run dev
```

it should be run on localhost:8080

```bash
npm install --save-dev webpack

// Now we can run webpack from the terminal direct from node_modules:

./node_modules/webpack/bin/webpack.js ./src/js/app.js --output-filename ./dist/app.bundle.js
```

```javascript
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
};
```

***create build script***
```javascript
{
  "scripts": {
    "build": "webpack"
  }
}
```

***dev server***
```javascript
npm install --save-dev webpack-dev-server
```

```javascript
"scripts": {
  "dev": "webpack-dev-server",
  "build": "webpack"
}
```

***template***
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <title>mantap jiwa</title>
  </head>
  <body>
  </body>
</html>
```
```javascript
/* and update webpack.config.js to use src as a content base. */
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  // Now it uses our "src" folder as a starting point
  devServer: {
    contentBase: paths.SRC,
  },
};
```

***html-webpack-plugin***
```javascript
npm install --save-dev html-webpack-plugin
```
***update webpack config***
```javascript
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import our plugin -> ADDED IN THIS STEP

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  // Tell webpack to use html plugin
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  // Dev server configuration
  // devServer: {
  //   contentBase: paths.SRC,
  // },
};
```

**babel**
```bash
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
```
***.babelrc***
```json
{
  "presets": ["env", "react"]
}
```

```javascript
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  // Tell webpack to use html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their's extenstion
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

*the fun part - React*
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <title>Mantap jiwa</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

***mount it***
```javascript
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
```