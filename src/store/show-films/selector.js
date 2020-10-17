import NameSpace from '../name-space';

const getActiveTag = (state) => {
  return state[NameSpace.SHOW].currentGenre;
};

const getFilmsByGenre = (state) => {
  const films = state[NameSpace.DATA].films;
  const tag = state[NameSpace.SHOW].currentGenre;
  return films.filter((item) => {
    if (tag === `All genres`) {
      return item;
    }
    return item.genre === tag;
  });
};

export {getFilmsByGenre,getActiveTag};
