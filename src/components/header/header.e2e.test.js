import React from 'react';
import {Router} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import history from '../../history.js';
import Header from './header.jsx';
import NameSpace from '../../store/name-space';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const location = {
  pathname: `/singin`,
};

describe(`Header`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      user: false,
    },
  });

  it(`Should signIn clicked`, () => {
    const header = mount(
      <Router history={history}>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );

    const signInLink = header.find(`a.user-block__link`);
    signInLink.simulate(
      `click`,
      header.instance().setState({
        location,
      })
    );
    expect(header.instance().state.location).toEqual(location);
  });
});
