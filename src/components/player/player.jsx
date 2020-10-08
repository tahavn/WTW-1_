import React, {PureComponent} from 'react';
import {render} from 'react-dom';
const TimeRanges = {
  MINUTES_IN_HOUR: 60,
  SECONDS_IN_MINUTE: 60,
};
class Player extends PureComponent {
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
  }

  componentDidMount() {
    const {film} = this.props;
    const video = this.videoRef.current;
    video.src = film.srcMovie;
    video.play();
    video.onloadedmetadata = () =>
      this.setState({
        duration: video.duration,
      });
    video.ontimeupdate = () =>
      this.setState({
        currentTime: Math.trunc(video.current),
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

  componentWillMount() {
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
    const second = Math.trunc(timeDiff % TimeRanges.SECONDS_IN_MINUTE);
    const minutes = Math.trunc(timeDiff % TimeRanges.SECONDS_IN_MINUTE);
    const hours = Math.trunc(timeDiff % TimeRanges.MINUTES_IN_HOUR);

    return `${hours.toString().padStart(2, `0`)}:${minutes
      .toString()
      .padStart(2, `0`)}${second.toString().padStart(2, `0`)}`;
  }
  // const playerToggler = (currentTime * 100) / duration + `%`;

  render() {
    const id = this.props.match.params.id;
    const {films} = this.props;
    const film = films[id];
    const {isPlaying, currentTime, duration} = this.state;
    const btnIsPlaying = isPlaying ? (
      <React.Fragment>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </React.Fragment>
    );
    return (
      <div className="player">
        <video
          ref={this.videoRef}
          
          className="player__video"
          poster="/img/player-poster.jpg"
        ></video>

        <button type="button" className="player__exit">
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value="30"
                max="100"
              ></progress>
              <div className="player__toggler" style={{left: '30%'}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={() => this._handlePlayingChange()}
            >
              {btnIsPlaying}
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use href="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
