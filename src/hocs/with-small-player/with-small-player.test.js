import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import withSmallPlayer from './with-small-player';

const noop = () => {};

const MockComponent = (props) => {
  const {onIsPlayingChange, isPlaying} = props;
  return (
    <React.Fragment>
      <div onClick={onIsPlayingChange} isPlaying={isPlaying}>
        Test
      </div>
    </React.Fragment>
  );
};
MockComponent.propTypes = {
  onIsPlayingChange: PropTypes.func,
  isPlaying: PropTypes.bool,
};
const MockComponentWrapped = withSmallPlayer(MockComponent);

it(`withSmallPlayer is rendered correctly`, () => {
  const tree = renderer
    .create(<MockComponentWrapped isPlaying={false} onIsPlayingChange={noop} />, {
      createNodeMock() {
        return {};
      },
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
