import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {films} from '../../../mocks/films';
import withPlayer from './withPlayer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
const mockStore = configureStore([]);
configure({adapter: new Adapter()});

const mockComponent = () => {
  return <div>1</div>;
};
const mockComponenWithPF = () => {
  return <div>1</div>;
};
const selectedID = 2;
describe('HOC withPlayer', () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: films,
    },
  });
  it('Should withvideo on play', () => {
    const ComponentWrapped = withPlayer(mockComponent);

    const wrapper = shallow(
      <Provider store={store}>
        <ComponentWrapped selectedID={selectedID}  />
      </Provider>
    );

    wrapper.instance()._handleIsPlayingChange(true);
    expect(wrapper.state().isPlaying).toEqual(true);
  });
});
