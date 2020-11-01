import React from 'react';
import TagList from '../tag-list/tag-list';
import CatalogList from '../catalog-list/catalog-list';
import PropTypes from 'prop-types';
import Footer from '../footer/footer';
import Loading from '../loading/loading';

import CotalogMore from '../catalog-more/catalog-more';

const Content = (props) => {
  const {films, tags, activeTag, handlerSorted, history, isLoading, numberOfmovie, addMovies, resetMovies} = props;
  const showFilms = films.slice(0, numberOfmovie);
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {isLoading ? (
          <TagsAndList
            history={history}
            films={showFilms}
            activeTag={activeTag}
            handlerSorted={handlerSorted}
            tags={tags}
            resetMovies={resetMovies}
          />
        ) : (
          <Loading />
        )}
        {numberOfmovie < films.length && <CotalogMore addMovies={addMovies} />}
      </section>

      <Footer />
    </div>
  );
};

const TagsAndList = ({
  activeTag,
  handlerSorted,
  tags,
  history,
  films,
  onSelectedFilm,
  resetMovies,
}) => (
  <React.Fragment>
    <TagList resetMovies={resetMovies} activeTag={activeTag} handlerSorted={handlerSorted} items={tags} />
    <CatalogList
      history={history}
      films={films}
      onSelectedFilm={onSelectedFilm}
    />
  </React.Fragment>
);

TagsAndList.propTypes = {
  films: PropTypes.array,
  tags: PropTypes.array,
  history: PropTypes.object,
  handlerSorted: PropTypes.func,
  onSelectedFilm: PropTypes.func,
  resetMovies: PropTypes.func,
  activeTag: PropTypes.string,
};
Content.propTypes = {
  films: PropTypes.array,
  tags: PropTypes.array,
  isLoading: PropTypes.bool,
  history: PropTypes.object,
  handlerSorted: PropTypes.func,
  handlerFilmMouseMove: PropTypes.func,
  handleSelectedFilms: PropTypes.func,
  resetMovies: PropTypes.func,
  addMovies: PropTypes.func,
  onSelectedFilm: PropTypes.func,
  activeTag: PropTypes.string,
  numberOfmovie: PropTypes.number,
};

export default Content;
