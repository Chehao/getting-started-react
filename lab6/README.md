# Lab 6 - Run Testing and find coverage

## Lab 6.1 prepare project

### Step 1. create react project

create project

```bash
npx create-react-app react-demo-test
cd react-demo-test
# open with vs code
code .
```

### Step 2. Run test

run test

```bash
yarn test

```

run coverage

```bash
yarn test --coverage

 PASS  src/App.test.js
  ✓ renders without crashing (24ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.412s
Ran all test suites.
--------------------------|----------|----------|----------|----------|-------------------|
File                      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------|----------|----------|----------|----------|-------------------|
All files                 |     2.08 |        0 |     5.88 |     4.35 |                   |
 App.js                   |      100 |      100 |      100 |      100 |                   |
 index.js                 |        0 |        0 |        0 |        0 |     1,2,3,4,5,7,8 |
 registerServiceWorker.js |        0 |        0 |        0 |        0 |... 36,137,138,139 |
--------------------------|----------|----------|----------|----------|-------------------|
✨  Done in 4.23s.
```

## jest and enzyme

### Step 1. Install test util package

```bash
yarn add react-redux redux-thunk redux
yarn add -D redux-mock-store
yarn add -D react-test-renderer
yarn add -D enzyme jest-enzyme enzyme-adapter-react-16
yarn add isomorphic-fetch
yarn add -D nock
```

### Config jest

[jest config](https://jestjs.io/docs/en/configuration.html)

package.json

```json
...,
  "scripts": {
    "start": "NODE_PATH=src/ react-scripts start",
    "build": "NODE_PATH=src/ react-scripts build",
    "test": "NODE_PATH=src/ react-scripts test --env=jsdom --setupTestFrameworkScriptFile=setupTests.js",
  },
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80
      }
    },
    "collectCoverageFrom": [
      "src/**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/*{d.ts}"
    ]
  },
```

### add exist actions, reducers, components

src/actions/index.test.js

```js
import {toggleTodo} from 'action';

describe('test toggleTodo action', () => {
  it('should create action message', () => {
    expect(toggleTodo('5')).toEqual({});
  });
})
```

src/components/TodoList.test.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Todo from './Todo';
import 'jest-enzyme';

it('1. render TodoList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList todos={[]} toggleTodo={() => {}} />, div);
});

it('2. render empty TodoList', () => {
  const tree = renderer.create(<TodoList todos={[]} toggleTodo={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

src/reducers/index.test.js

```js
import reducer from 'reducers';

describe('All Reducer', () => {
  it('test todo reducer initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    });
  });

  const initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  };

  it('test todo reducder add todo', () => {
    expect(
      reducer(initialState, {
        type: 'ADD_TODO',
        id: 1,
        text: 'hollo',
        completed: false
      })
    ).toEqual({
      todos: [
        {
          id: 1,
          text: 'hollo',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    });
  });
});

```