import React from 'react';
import TagItem from '../tag-item/tag-item';
import PropTypes from 'prop-types';
const TagList = (props) => {
  const {items, handlerSorted, resetMovies, activeTag} = props;
  const handlerClick = (item) => {
    resetMovies();
    handlerSorted(item);
  };
  return (
    <ul className="catalog__genres-list">
      <TagItem
        activeTag={activeTag}
        handlerSorted={()=>handlerClick(`All genres`)}
        title={`All genres`}
      />
      {items &&
        items.map((item) => {
          return (
            <TagItem
              activeTag={activeTag}
              handlerSorted={()=>handlerClick(item)}
              key={item}
              title={item}
            />
          );
        })}
    </ul>
  );
};

TagList.propTypes = {
  items: PropTypes.array,
  handlerSorted: PropTypes.func,
  resetMovies: PropTypes.func,
  activeTag: PropTypes.string,
};
export default TagList;
