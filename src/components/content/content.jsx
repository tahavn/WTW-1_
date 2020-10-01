import React from 'react';
import TagList from '../tag-list/tag-list';
import {tags} from '../../../mocks/tags';
import CatalogList from '../catalog-list/catalog-list';
import {encodeText} from '../../../utils';
import {articles} from '../../../mocks/articles';

articles.forEach((art) => {
  art.src = encodeText(art.title);
});
const Content = () => {
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <TagList items={tags} />
        <CatalogList articles={articles} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default Content;
