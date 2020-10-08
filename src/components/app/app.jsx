import React, {useState, useEffect, PureComponent} from 'react';
import Main from '../main/main';
import Content from '../content/content';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import MoviePage from '../pages/movie/movie';
import Player from '../player/player';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {getRandomElement} from '../../utils';
import {films} from '../../../mocks/films';
import {tags} from '../../../mocks/tags';
import MylistPage from '../pages/mylist-page/mylist-page';

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
    console.log(props);
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
    // console.log(history);

    history.push(`/films/${this.state.activeFilm.id}`);
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
            render={(props) => {
              return (
                <>
                  <Main randomFilm={getRandomElement(films)} />
                  <Content
                    {...props}
                    handlerFilmMouseMove={this.handlerFilmMouseMove}
                    handlerFilmClick={this.handlerFilmClick}
                    handlerSorted={this.handlerSorted}
                    tags={tags}
                    activeTag={this.state.sortedTag}
                    films={this.state.sortedFilms}
                  />
                </>
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
            render={(props) => {
              return <Addreview {...props} films={films} />;
            }}
          />
          <Route
            path="/films/:id"
            exact
            render={(props) => {
              return <MoviePage {...props} films={films} />;
            }}
          />
          <Route path="/mylist">
            <MylistPage />
          </Route>
          <Route
            path="/player/:id"
            render={(props) => {
              return <Player {...props} films={films} />;
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
