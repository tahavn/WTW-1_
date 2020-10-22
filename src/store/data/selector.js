import NameSpace from '../name-space';

const getIsLoading = (state) => {
  return state[NameSpace.DATA].isLoading;
};

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export {getIsLoading, getFilms};
