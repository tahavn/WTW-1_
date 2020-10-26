import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {films} from '../../../mocks/films';
import App from './app';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);
describe(`App`, () => {
  it(`Reander pageMain`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films,
        isLoading: false,
      },
      [NameSpace.SHOW]: {
        currentGenre: `All genres`,
        filmsByGenre: [],
        sameFilms: [],
        selectedFilm: false,
        favoriteFilms: [],
      },
      [NameSpace.USER]: {
        user: false,
        isLogin: false,
      },
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <App onFilmSelect={() => {}} />
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
