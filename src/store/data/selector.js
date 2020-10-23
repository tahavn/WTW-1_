import {films} from '../../../mocks/films';
import NameSpace from '../name-space';

const getIsLoading = (state) => {
  return state[NameSpace.DATA].isLoading;
};

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};
const getTags = (state) => {
  const films = state[NameSpace.DATA].films;
  const tags = films.map((f) => {
     return f.genre;
  });
  return [...new Set(tags)]
};
export {getIsLoading, getFilms, getTags};
