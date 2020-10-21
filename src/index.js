import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './store/reducer';
import {createStore} from 'redux';
import {ActionCreator} from './store/data/reducer';
import {Provider} from 'react-redux';
const store = createStore(reducer, composeWithDevTools());

setTimeout(() => {
  store.dispatch(ActionCreator.loadFilms());
}, 3000);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
