import React from 'react';
import PropTypes from 'prop-types';

const TagItem = (props) => {
  const {title, handlerSorted, activeTag} = props;
  console.log(title,  activeTag);
  const handlerClick = (tagTitle, evt) => {
    evt.preventDefault();
    handlerSorted(tagTitle);
  };
  const activeClass = activeTag === title ? ` catalog__genres-item--active` : ``;
  return (
    <li
      onClick={(evt) => handlerClick(title, evt)}
      className={`catalog__genres-item${activeClass}`}
    >
      <a href="#" className="catalog__genres-link">
        {title}
      </a>
    </li>
  );
};

TagItem.propTypes = {
  title: PropTypes.string.isRequired,
  activeTag: PropTypes.string.isRequired,
  handlerSorted: PropTypes.func,
};

export default TagItem;
