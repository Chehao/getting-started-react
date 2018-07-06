# Lab1 - Create project and build with webpack

- [Step 1. Initial npm project](#step-1-initial-npm-project)
- [Step 2. Copy project files](#step-2-copy-project-files)
- [Step 3. Creating a Bundle using webpack](#step-3-creating-a-bundle-using-webpack)
- [Step 4. Using webpack configuration](#step-4-using-webpack-configuration)
- [Step 5. NPM Scripts](#step-5-npm-scripts)


## Step 1. initial npm project

```bash
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

## Step 2. copy project files

```bash
webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

src/index.js

```js
function component() {
  var element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
```

index.html

```html
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

## Step 3. Creating a Bundle using webpack

- project

```bash
webpack-demo
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js
```

- install lodash module

```bash
npm install --save lodash
```

src/index.js

```js
+ import _ from 'lodash';
+
  function component() {
    var element = document.createElement('div');

-   // Lodash, currently included via a script, is required for this line to work
+   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
```

dist/index.html

```html
<!doctype html>
  <html>
   <head>
     <title>Getting Started</title>
-    <script src="https://unpkg.com/lodash@4.16.6"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="main.js"></script>
   </body>
  </html>
```

package.json

```json
{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true,
-   "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.0.1",
      "webpack-cli": "^2.0.9"
    },
    "dependencies": {}
  }
```

webpack

```bash
npx webpack
Hash: 384ce94190f6b9fdfed0
Version: webpack 4.15.1
Time: 145ms
Built at: 2018-07-06 16:31:57
  Asset      Size  Chunks             Chunk Names
main.js  1.03 KiB       0  [emitted]  main
[0] ./src/index.js 281 bytes {0} [built]

```

## Step 4. Using webpack configuration

- project

```bash
  webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

```bash
npx webpack --config webpack.config.js
```

## Step 5. NPM Scripts

package.json

```json
{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.0.1",
      "webpack-cli": "^2.0.9",
      "lodash": "^4.17.5"
    }
  }
```

run build

```bash
npm run build
```