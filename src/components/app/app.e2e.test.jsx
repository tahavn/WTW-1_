import React from 'react';

import { Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import history from '../../history.js';
import App from './App.jsx';
import NameSpace from '../../store/name-space';

Enzyme.configure({
    adapter: new Adapter(),
});

const mockStore = configureStore([]);

const location = {
    pathname: `/singin`,
};

describe(`Header`, () => {
    const 
    const store = mockStore({
        [NameSpace.USER]: {
            user: false,
        },
    });

    it(`Should signIn clicked`, () => {
        const header = mount(<Provider store={store} >
            <Router history={history} >
                <App />
            </Router>
        </Provider >
        );

        const signInLink = tag.find(`.catalog__genres-item`);
        signInLink.simulate(
            `click`
        );
        expect();
    });
});