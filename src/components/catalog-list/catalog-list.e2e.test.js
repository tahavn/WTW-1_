import React from 'react';
import {Provider} from 'react-redux';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatalogList from './catalog-list';
import {films} from '../../../mocks/films';

import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Catalog list btn`, () => {
  const store = mockStore({});
  const onSelectedFilm = jest.fn();
  it(`should be click`, () => {
    const main = mount(
      <Provider store={store}>
        <CatalogList history={history} films={films} onSelectedFilm={onSelectedFilm} />
      </Provider>
    );

    const showButton = main.find(`.catalog__movies-list`);
    showButton.simulate(`click`);
    expect(onSelectedFilm).toHaveBeenCalledTimes(0);
  });
});
