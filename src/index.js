import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {redirect} from './store/middlewares/redirect';
import {createAPI} from './api';
import reducer from './store/root-reducer';

import {Operations as DataOperation} from './store/data/data-reducer';
import {Operations as UserOperation} from './store/user/user-reducer';
import App from './components/app/app';

const onUnauthorize = () => {
  // вызов разлогиванивания
};

const api = createAPI(onUnauthorize);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect))
);

store.dispatch(DataOperation.loadFilms());
// store.dispatch(UserOperation.checkAuth());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);

