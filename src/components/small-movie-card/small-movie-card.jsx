import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

class SmallMovieCard extends PureComponent {
  constructor() {
    super();

    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {film, isPlaying, onIsPlayingChange, handlerFilmClick} = this.props;
    return (
      <article
        onMouseEnter={() => {
          this.timeout = setTimeout(() => {
            onIsPlayingChange(true);
          }, 1000);
        }}
        onMouseLeave={() => {
          clearTimeout(this.timeout);
          onIsPlayingChange(false);
        }}
        onClick={() => handlerFilmClick(props.history)}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          {/* <img src={film.src} alt={`${film.title}`} width="280" height="175" /> */}
          <VideoPlayer poster={film.src} muted isPlaying={isPlaying} src={film.srcMovie} />
        </div>
        <h3 className="small-movie-card__title">
          <a
            to={`/player/${film.id}`}
            onClick={(event) => event.preventDefault()}
            className="small-movie-card__link"
            href="#"
          >
            {film.title}
          </a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
  handlerFilmMouseMove: PropTypes.func,
};

export default SmallMovieCard;
