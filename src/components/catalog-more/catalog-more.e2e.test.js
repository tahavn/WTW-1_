import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatalogMore from './catalog-more';
Enzyme.configure({
  adapter: new Adapter(),
});

describe('Catalog btn ', () => {
  const handleShowButton = jest.fn();
  it('should be click', () => {
    const main = mount(<CatalogMore addMovies={handleShowButton} />);

    const showButton = main.find('.catalog__button');
    showButton.simulate('click');
    expect(handleShowButton).toHaveBeenCalled();
  });
});
