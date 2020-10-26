import React from 'react';
import renderer from 'react-test-renderer';
import CatalogMore from './catalog-more';

describe('Catalog-more', () => {
  it('should be componetn button', () => {
    const tree = renderer.create(<CatalogMore addMovies={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
