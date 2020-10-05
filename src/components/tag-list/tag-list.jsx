import React from 'react';
import TagItem from '../tag-item/tag-item';
import PropTypes from 'prop-types';
const TagList = (props) => {
  const {items,handlerSorted} = props;
  return (
    <ul className="catalog__genres-list">
      <TagItem handlerSorted={handlerSorted} title={`All genres`} />
      {items &&
        items.map((item) => {
          return <TagItem  handlerSorted={handlerSorted} key={item} title={item} />;
        })}
    </ul>
  );
};

TagList.propTypes = {
  items: PropTypes.array,
};
export default TagList;
