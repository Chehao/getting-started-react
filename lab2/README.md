# Lab2 - Create first React Component and Build React Component

  - [Step 1. Setup Project](#step-1-setup-project)
  - [Step 2. Install react module](#step-2-install-react-module)
  - [Step 3. Add index.css and index.js](#step-3-add-indexcss-and-indexjs)
  - [Step 4. Add import react module](#step-4-add-import-react-module)
  - [Step 5. Setup Webpack add Babel & CSS Loader](#step-5-setup-webpack-add-babel--css-loader)
  - [Step 6. Build All](#step-6-build-all)

## Step 1. Setup Project

Create react-demo folder and setup project, see [Lab1](https://github.com/Chehao/getting-started-react/tree/master/lab1)

## Step 2. Install react module

```bash
npm install react react-dom
```

## Step 3. Add index.css and index.js

project

```bash
react-demo
  |- package.json
+ |- webpack.config.js
+ |- /dist
+   |- index.html
+ |- /src
+   |- index.js
+   |- index.css
```

## Step 4. Add import react module

src/index.js

```js
+ import React from 'react';
+ import ReactDOM from 'react-dom';
+ import './index.css';
```

## Step 5. Setup Webpack add Babel & CSS Loader

```bash
npm install --save-dev css-loader style-loader
npm install --save-dev babel-loader babel-core babel-preset-env babel-preset-react
```

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
+  module: {
+    rules: [
+      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
+      {
+         test: /\.js$/,
+         exclude: /(node_modules|bower_components)/,
+         use: {
+          loader: 'babel-loader',
+          options: {
+            presets: ['env', 'react']
+          }
+         }
+      }
+    ]
+  }
};
```

package.json

```json
{
  "name": "react-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
-   "build": "webpack"
+   "build": "webpack --mode=production"
  },
  ...
}

```

index.html

```html
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
  </head>
  <body>
+   <div id="root" />
    <script src="main.js"></script>
  </body>
</html>
```

## Step 6. Build All

```bash
npm run build
```

## Step 7. For further, check webpack official guides

- [Using webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
