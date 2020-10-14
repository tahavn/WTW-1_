import React, { PureComponent} from 'react';
import Main from '../main/main';
// import Content from '../content/content';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import MoviePage from '../pages/movie/movie';
import Player from '../player/player';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {getRandomElement} from '../../utils';
import {films} from '../../../mocks/films';

import MylistPage from '../pages/mylist-page/mylist-page';
import PlayerMyTest from '../player/player-test';
import withPlayer from '../hocs/withPlayer/withPlayer';
import withTags from '../hocs/with-tags/with-tags';


const VideoWrappedPlayer = withPlayer(Player);
const MainWithTags = withTags(Main);
class App extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      sortedFilms: null,
      sortedTag: `All genres`,
      activeFilm: null,
    };
    this.handlerSorted = this.handlerSorted.bind(this);
    this.handlerFilmMouseMove = this.handlerFilmMouseMove.bind(this);
    this.handlerFilmClick = this.handlerFilmClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      sortedFilms: films,
    });
  }
  componentDidUpdate() {
    // const newFilms = this.handlerSorted();
    // this.setState({
    //   sortedFilms: newFilms,
    // });
  }
  handlerFilmClick(history) {
    // history.push(`/films/${this.state}`);
  }
  handlerFilmMouseMove(film) {
    // console.log(history);

    this.setState({
      activeFilm: film,
    });
  }

  handlerSorted(activeTag) {
    this.setState({
      sortedTag: activeTag,
    });
    const newFilms = films.filter((item) => {
      if (this.state.sortedTag === `All genres`) {
        return item;
      }
      return item.genre === this.state.sortedTag;
    });
    this.setState({
      sortedFilms: newFilms,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => {
              return (
                <MainWithTags
                  history={routerProps.history}
                  randomFilm={getRandomElement(films)}
                />
              );
            }}
          />
          {/* <Route exact path="/">

          </Route> */}
          <Route path="/singin">
            <Singin />
          </Route>
          <Route
            path="/films/:id/review"
            render={(routerProps) => {
              return <Addreview {...routerProps} films={films} />;
            }}
          />
          <Route
            path="/films/:id"
            exact
            render={(routerProps) => {
              const selectedID = +routerProps.match.params.id;
              return (
                <MoviePage
                  selectedID={selectedID}
                  history={routerProps.history}
                  films={films}
                />
              );
            }}
          />
          <Route path="/mylist">
            <MylistPage />
          </Route>
          <Route
            path="/player/:id"
            render={(props) => {
              const selectedID = +props.match.params.id;
              return (
                <VideoWrappedPlayer
                  selectedID={selectedID}
                  {...props}
                  selectedFilm={films}
                />
              );
            }}
          />

          <Route
            render={() => (
              <>
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <PlayerMyTest />
                <Link to="/">Go to main page</Link>
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
