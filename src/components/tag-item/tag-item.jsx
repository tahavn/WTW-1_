import React from 'react';
import PropTypes from 'prop-types';

const TagItem = (props) => {
  const {title} = props;

  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">
        {title}
      </a>
    </li>
  );
};

TagItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TagItem;
