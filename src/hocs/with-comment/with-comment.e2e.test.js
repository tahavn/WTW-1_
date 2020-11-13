import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withComment} from './with-comment';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockComponent = () => {
  return <div></div>;
};
describe('HoC withComment', () => {
  const _handleSubmitReview = jest.fn();
  const _handleChangeRating = jest.fn();
  const _handleChangeComment = jest.fn();
  const loadFilms = jest.fn();
  it('should be with wrapper comment equal 2', () => {
    const ComponentWrapped = withComment(mockComponent);
    const wrapped = mount(
      <ComponentWrapped
      loadFilms={loadFilms}
        onChangeComment={_handleChangeComment}
        onChangeReview={_handleChangeRating}
        onSubmitReview={_handleSubmitReview}
      />
    );

    const event = {
      preventDefault: jest.fn(),
      target: {
        value: 2
      }
    }

    wrapped.instance()._handleChangeComment(event);
    expect(wrapped.state().comment).toEqual(2);
  });
  it('should be with wrapper and rating equal 5', () => {
    const ComponentWrapped = withComment(mockComponent);
    const wrapped = mount(
      <ComponentWrapped
      loadFilms={loadFilms}
        onChangeComment={_handleChangeComment}
        onChangeReview={_handleChangeRating}
        onSubmitReview={_handleSubmitReview}
      />
    );

    const event = {
      preventDefault: jest.fn(),
      target: {
        value: 5
      }
    }

    wrapped.instance()._handleChangeRating(event);
    expect(wrapped.state().rating).toEqual(5);
  });
});
