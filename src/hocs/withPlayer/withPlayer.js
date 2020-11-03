import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getFilmById} from '../../store/data/data-selector';

const withPlayerControl = (Component) => {
  class WithPlayerControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTime: 0,
        duration: 0,
        isPlaying: true,
      };

      this.videoRef = React.createRef();

      this._handleIsPlayingChange = this._handleIsPlayingChange.bind(this);
      this._handleSetFullScreen = this._handleSetFullScreen.bind(this);
      this._leftTime = this._leftTime.bind(this);
    }

    componentDidMount() {
      const {selectedFilm} = this.props;
      const video = this.videoRef.current;
      video.src = selectedFilm.srcMovie;
      video.play();
      video.onloadedmetadata = () =>
        this.setState({
          duration: video.duration,
        });
      video.ontimeupdate = () =>
        this.setState({
          currentTime: Math.trunc(video.currentTime),
        });
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      if (document.fullscreenElement === null) {
        video.controls = false;
      }
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.src = ``;
      video.onplay = null;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
      video.controls = null;
    }

    _handleIsPlayingChange() {
      const {isPlaying} = this.state;
      this.setState({
        isPlaying: !isPlaying,
      });
    }
    _handleSetFullScreen() {
      const video = this.videoRef.current;
      video.requestFullscreen();
      video.controls = true;
    }
    _leftTime() {
      const {currentTime, duration} = this.state;
      const timeDiff = duration - currentTime;
      const second = Math.trunc(timeDiff % 60);
      const minutes = Math.trunc(timeDiff / 60);
      const hours = Math.trunc(minutes / 60);
      return `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${second
        .toString()
        .padStart(2, `0`)}`;
    }
    // const playerToggler = (currentTime * 100) / duration + `%`;

    render() {
      return (
        <Component
          {...this.props}
          onSetFullScreen={this._handleSetFullScreen}
          onIsPlayingChange={this._handleIsPlayingChange}
          leftTime={this._leftTime}
          selectedFilm={this.props.selectedFilm}
          currentTime={this.state.currentTime}
          isPlaying={this.state.isPlaying}
          duration={this.state.duration}
        >
          <video className="player__video" ref={this.videoRef}>
            your browser doesn`t support embedded videos
          </video>
        </Component>
      );
    }
  }

  const mapStateToProps = (state, props) => ({
    selectedFilm: getFilmById(state, props),
  });
  return connect(mapStateToProps)(WithPlayerControl);
};

export default withPlayerControl;
