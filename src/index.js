import React from 'react';
import ReactDom from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {redirect} from "./store/middlewares/redirect";
import {createAPI} from './api';
import reducer from './store/reducer';

import {ActionCreator,Operations} from './store/data/reducer';
import App from './components/app/app';

const onUnauthorize = () => {
  // вызов разлогиванивания
};

const api = createAPI(onUnauthorize);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
    )
);

setTimeout(() => {
  store.dispatch(Operations.loadFilms());
}, 1000);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
