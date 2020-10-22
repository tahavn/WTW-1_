import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super();
    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {
      film,
      isPlaying,
      onIsPlayingChange,
      onSelectedFilm,
      history,
      children
    } = this.props;
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
        onClick={() => {
          onSelectedFilm(film);
          history.push(`/films/${film.id}`);
        }}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          {/* <img src={film.src} alt={`${film.title}`} width="280" height="175" /> */}
         {this.props.children}
         
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
  history: PropTypes.object,
  isPlaying: PropTypes.bool,
  onIsPlayingChange: PropTypes.func,
  onSelectedFilm: PropTypes.func,
  handlerFilmClick: PropTypes.func,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    src: PropTypes.string,
    srcMovie: PropTypes.string,
  }).isRequired,
  handlerFilmMouseMove: PropTypes.func,
};

export default SmallMovieCard;
