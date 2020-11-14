import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from './singin';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
Enzyme.configure({
  adapter: new Adapter(),
});

const auth = {
  error: false,
};

describe(`Should be fine `, () => {
  it(`When user click SignIn`, () => {
    const handleSignIn = jest.fn();
    const store = mockStore({
      USER: ``,
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn onFormSubmit={handleSignIn} auth={auth} signIn={() => {}} />
        </MemoryRouter>
      </Provider>
    );

    const signInBtn = wrapper.find(`.sign-in__btn`);

    signInBtn.simulate(`submit`, {preventDefault() {}});
    expect(handleSignIn).toHaveBeenCalledTimes(0);
  });

  
});
