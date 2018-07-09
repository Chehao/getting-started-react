# Lab 3 - Using Create React App

## Lab 3.1

### Step 1. Install create-react-app (optional)

```bash
npm install -g create-react-app
npm install -g yarn
```

## Step 2. create react project

```bash
create-react-app react-demo
# or
npx create-react-app react-demo
```

## Step 3. Add index.css and index.js

project

```bash
react-demo
+ |- package.json
+ |- README.md
+ |- /public
+   |- favicon.ico
+   |- index.html
+   |- manifest.json
+ |- /src
+   |- App.css
+   |- App.js
+   |- App.test.js
+   |- index.css
+   |- index.js
+   |- logo.svg
+   |- registerServiceWorker.js
```

run template

```bash
cd react-demo
npm start
# or
yarn start
```

## Step 4. Remove template and add components, check view

```bash
rm -f src/*
```

Copy index.js ParentBox.jsx Children.jsx into react-demo/src

```bash
eact-demo
+ |- package.json
+ |- README.md
+ |- /public
+   |- favicon.ico
+   |- index.html
+   |- manifest.json
+ |- /src
-   |- App.css
-   |- App.js
-   |- App.test.js
-   |- index.css
-   |- index.js
-   |- logo.svg
-   |- registerServiceWorker.js
+   |- index.js
+   |- ParentBox.jsx
+   |- Children.jsx

```

## Lab 3.2 React Developer Tools (Chrome)

### Open Browser Developer Tools

```text
F12(windows) or cmd + option + i (mac)
```

Reload components on lab 3.1 and check console output.

Write down the order of components render lifecycle

### Install React Developer Tools

install
  [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

Find the component props and state, click the action to see how props and state changed.
