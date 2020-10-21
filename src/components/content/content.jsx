import React from 'react';
import TagList from '../tag-list/tag-list';
import CatalogList from '../catalog-list/catalog-list';
import PropTypes from 'prop-types';
import Footer from '../footer/footer';
import Loading from '../loading/loading';

const TagsAndList = ({
  activeTag,
  handlerSorted,
  tags,
  history,
  films,
  onSelectedFilm,
}) => (
  <React.Fragment>
    <TagList activeTag={activeTag} handlerSorted={handlerSorted} items={tags} />
    <CatalogList
      history={history}
      films={films}
      onSelectedFilm={onSelectedFilm}
    />
  </React.Fragment>
);

const Content = (props) => {
  const {
    films,
    tags,
    onSelectedFilm,
    activeTag,
    handlerSorted,
    history,
    isLoading,
  } = props;
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {isLoading ? (
          <TagsAndList
            history={history}
            films={films}
            onSelectedFilm={onSelectedFilm}
            activeTag={activeTag}
            handlerSorted={handlerSorted}
            tags={tags}
          />
        ) : (
          <Loading />
        )}
        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Content.propTypes = {
  films: PropTypes.array,
  tags: PropTypes.array,
  isLoading: PropTypes.bool,
  handlerSorted: PropTypes.func,
  handlerFilmMouseMove: PropTypes.func,
  handleSelectedFilms: PropTypes.func,
  activeTag: PropTypes.string,
};

export default Content;
