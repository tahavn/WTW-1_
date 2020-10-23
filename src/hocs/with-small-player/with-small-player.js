import React, {PureComponent} from 'react';

const withSmallPlayer = (Component) => {
  class WithSmallPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };


      this._handleIsPlayingChange = this._handleIsPlayingChange.bind(this);
    }

    _handleIsPlayingChange(isPlaying) {
      this.setState({
        isPlaying,
      });
    }

    // const playerToggler = (currentTime * 100) / duration + `%`;

    render() {
      return (
        <Component
          {...this.props}
          onIsPlayingChange={this._handleIsPlayingChange}
          isPlaying={this.state.isPlaying}
        ></Component>
      );
    }
  }
  return WithSmallPlayer;
};

export default withSmallPlayer;
