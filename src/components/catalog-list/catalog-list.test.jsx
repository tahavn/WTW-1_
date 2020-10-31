import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {films} from '../../../mocks/films';
import CatalogList from './catalog-list';
import {Provider} from 'react-redux';
const mockStore = configureStore([]);

describe(`CatalogList is testing`, () => {
  it(`Renderer Catalog with props`, () => {
    const store = mockStore({});
    const history = {};
    const onSelectedFilm = () => {};

    const tree = renderer
      .create(
        <Provider store={store}>
          <CatalogList history={history} films={films} onSelectedFilm={onSelectedFilm} />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
