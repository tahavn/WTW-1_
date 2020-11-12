/* eslint-disable indent */
import MockAdapter from 'axios-mock-adapter';
import {reducer, ActionCreator, ActionType} from './data-reducer';
import {createAPI} from '../../api';
import {films} from '../../../mocks/films';

const initialState = {
  films: [],
  isLoading: false,
  isError: false,
  comments: false,
  loadingComments: true,
  loadCommentsError: false,

  sendingComment: false,
  sendCommentDone: false,
  sendCommentError: false,

  isLoadingFavoriteFilms: true,
  favoriteFilms: [],
  isFavoriteFilmsError: false,
};

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);
describe(`should test data-reducer`, () => {
  it(`should be initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`should update  load films`, () => {
      expect(
        reducer(
          {
            films: [],
            isLoading: false,
          },
          {
            type: ActionType.LOAD_FILMS,
            payload: films,
          }
        )
      ).toEqual({
        films,
        isLoading: true,
      });
  });
});
