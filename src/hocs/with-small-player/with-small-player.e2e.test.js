import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import withSmallPlayer from './with-small-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => {
  return (
    <React.Fragment>
      <div>Test</div>
    </React.Fragment>
  );
};

describe(`HOC withSmallPlayer`, () => {
  const _handleIsPlayingChange = jest.fn();
  it(`should be with component false`, () => {
    const ComponentWrapped = withSmallPlayer(MockComponent);
    const wrapped = mount(<ComponentWrapped _handleIsPlayingChange={_handleIsPlayingChange} />);
    // wrapped.instance()._handleIsPlayingChange();
    expect(wrapped.state().isPlaying).toEqual(false);
  });

  it(`should be with reset true`, () => {
    const ComponentWrapped = withSmallPlayer(MockComponent);
    const wrapped = mount(<ComponentWrapped _handleIsPlayingChange={_handleIsPlayingChange} />);
    wrapped.instance()._handleIsPlayingChange(true);
    expect(wrapped.state().isPlaying).toEqual(true);
  });
});
