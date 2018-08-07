import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { 
  // applyMiddleware, compose, 
  createStore } from 'redux';
// import { DevTools } from './DevTools';

// let componsed = compose(applyMiddleware(thunk))
// if (process.env.NODE_ENV === 'development') {
//   componsed = compose(
//     applyMiddleware(thunk),
//     DevTools.instrument()
//   )
// }
// const store = createStore(rootReducer, componsed);
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
