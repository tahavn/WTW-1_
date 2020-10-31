import React from 'react';
import PropTypes from 'prop-types';
const Player = (props) => {
  // const playerToggler = (currentTime * 100) / duration + `%`;

  const {
    isPlaying,
    currentTime,
    duration,
    children,
    history,
    selectedFilm,
    onIsPlayingChange,
    leftTime,
    onSetFullScreen,
  } = props;
  console.log(props);
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
      {children}

      <button type="button" className="player__exit" onClick={() => history.push(`${`/films`}/${selectedFilm.id}`)}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${currentTime}`} max={`${duration}`}></progress>
            <div className="player__toggler" style={{left: `${(currentTime / duration) * 100}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{leftTime()}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => onIsPlayingChange()}>
            {btnIsPlaying}
          </button>
          <div className="player__name">{leftTime()}</div>

          <button onClick={() => onSetFullScreen()} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  isPlaying: PropTypes.bool,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  children: PropTypes.node,
  onIsPlayingChange: PropTypes.func,
  leftTime: PropTypes.func,
  onSetFullScreen: PropTypes.func,
};

export default Player;
