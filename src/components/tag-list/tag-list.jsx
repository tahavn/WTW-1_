import React from 'react';
import TagItem from '../tag-item/tag-item';
import PropTypes from 'prop-types';
const TagList = (props) => {
  const {items, handlerSorted, activeTag} = props;
  return (
    <ul className="catalog__genres-list">
      <TagItem
        activeTag={activeTag}
        handlerSorted={handlerSorted}
        title={`All genres`}
      />
      {items &&
        items.map((item) => {
          return (
            <TagItem
              activeTag={activeTag}
              handlerSorted={handlerSorted}
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
  activeTag: PropTypes.string,
};
export default TagList;
