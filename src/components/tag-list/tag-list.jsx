import React from 'react';
import TagItem from '../tag-item/tag-item';
import PropTypes from 'prop-types';
const TagList = (props) => {
  const {items} = props;
  return (
    <ul className="catalog__genres-list">
      {items &&
        items.map((item) => {
          return <TagItem key={item} title={item} />;
        })}
    </ul>
  );
};

TagList.propTypes = {
  items: PropTypes.array,
};
export default TagList;
