import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './state/reducers';
import App from './modules/app';

const articleStore = createStore(appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={articleStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
