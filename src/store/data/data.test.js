/* eslint-disable indent */
import MockAdapter from 'axios-mock-adapter';
import {adaptiveFilms} from '../../adapter';
import {reducer, ActionCreator, ActionType, Operations} from './data-reducer';
import {createAPI} from '../../api';
import {films} from '../../../mocks/films';
const mockFilmServerStyle = {
  background_color: ``,
  background_image: ``,
  description: `I hate tests.`,
  director: ``,
  genre: ``,
  id: 1,
  is_favorite: true,
  name: ``,
  poster_image: ``,
  preview_image: ``,
  preview_video_link: ``,
  rating: 3.6,
  released: 2008,
  run_time: 92,
  scores_count: 0,
  starring: [``, ``, ``],
  video_link: ``,
};
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

  isLoadingPromo: true,
  filmPromo: false,
  isErrorPromo: false,
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

describe('Async operation work correctly', () => {
  it('Shuld make a correct Api call to /films', () => {
    const dataMock = [mockFilmServerStyle];
    const dispatch = jest.fn();
    const filmLoader = Operations.loadFilms();

    apiMock.onGet(`films`).reply(200, dataMock);

    return filmLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: dataMock.map((film) => adaptiveFilms(film)),
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.IS_LOAD_FILMS,
      });
    });
  });
});
