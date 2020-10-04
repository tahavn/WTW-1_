import React from 'react';
import TagList from '../tag-list/tag-list';
import CatalogList from '../catalog-list/catalog-list';
import PropTypes from 'prop-types';
import Footer from '../footer/footer';

const Content = (props) => {
  const {films, tags} = props;
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <TagList handlerSorted={props.handlerSorted} items={tags} />
        <CatalogList films={films} />

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
};

export default Content;
