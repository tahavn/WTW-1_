import React, {PureComponent} from 'react';

const withControl = (Component) => {
  class WithControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTime: 0,
        duration: 0,
      };

      this._handleSetFullScreen = this._handleSetFullScreen.bind(this);
      this._leftTime = this._leftTime.bind(this);
    }

    componentDidMount() {
      const video = this.props.video.current;
      video.onloadedmetadata = () =>
        this.setState({
          duration: video.duration,
        });
      video.ontimeupdate = () =>
        this.setState({
          currentTime: Math.trunc(video.currentTime),
        });
    }

    _leftTime() {
      const {currentTime, duration} = this.state;
      const timeDiff = duration - currentTime;
      const second = Math.trunc(timeDiff % 60);
      const minutes = Math.trunc(timeDiff / 60);
      const hours = Math.trunc(minutes / 60);
      return `${hours
        .toString()
        .padStart(2, `0`)}:${minutes
        .toString()
        .padStart(2, `0`)}:${second.toString().padStart(2, `0`)}`;
    }
    _handleSetFullScreen() {
      const video = this.props.video.current;
      video.requestFullscreen();
      video.controls = true;
    }
    render() {
      return (
        <Component
          {...this.props}
          onSetFullScreen={this._handleSetFullScreen}
          leftTime={this._leftTime}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
        >
          {this.props.children}
        </Component>
      );
    }
  }
  return WithControl;
};

export default withControl;
