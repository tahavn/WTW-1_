import React from 'react';
import PropTypes from 'prop-types';
import CatalogItem from '../catalog-item/catalog-item';

const CatalogList = (props) => {
  const {articles} = props;
  return (
    <div className="catalog__movies-list">
      {articles &&
        articles.map((article) => {
          return <CatalogItem key={article.title} article={article} />;
        })}
    </div>
  );
};

CatalogList.propTypes = {
  articles: PropTypes.array,
};

export default CatalogList;
