import React from 'react';
import PropTypes from 'prop-types';

const TagItem = (props) => {
  const {title, handlerSorted} = props;
  const handlerClick = (tagTitle, evt) => {
    evt.preventDefault();
    handlerSorted(tagTitle);
  };
  return (
    <li
      onClick={(evt) => handlerClick(title, evt)}
      className="catalog__genres-item"
    >
      <a href="#" className="catalog__genres-link">
        {title}
      </a>
    </li>
  );
};

TagItem.propTypes = {
  title: PropTypes.string.isRequired,
  handlerSorted: PropTypes.func
};

export default TagItem;
