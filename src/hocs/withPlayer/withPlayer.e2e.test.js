import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {films} from '../../../mocks/films';
import {withPlayerControl} from './withPlayer';

configure({adapter: new Adapter()});

const mockComponent = () => {
  return <h1>Hello</h1>;
};

const selectedID = 2;
describe('HOC withPlayer', () => {
  it(`Should withvideo on play`, () => {
    const ComponentWrapped = withPlayerControl(mockComponent);

    const wrapper = shallow(<ComponentWrapped selectedID={selectedID} selectedFilm={films[0]} />);

    wrapper.instance()._handleIsPlayingChange();
    wrapper.instance().setState((prev) => ({
      isPlaying: !prev.isPlaying,
    }));
    expect(wrapper.state().isPlaying).toEqual(true);
  });
});
