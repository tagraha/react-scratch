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