import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './store/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(reducer, composeWithDevTools());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
