import React from 'react';
import Main from '../main/main';
// import Content from '../content/content';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import MoviePage from '../pages/movie/movie';
import Player from '../player/player';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


import MylistPage from '../pages/mylist-page/mylist-page';
import PlayerMyTest from '../player/player-test';
import withPlayer from '../../hocs/withPlayer/withPlayer';
import withTags from '../../hocs/with-tags/with-tags';

const VideoWrappedPlayer = withPlayer(Player);
const MainWithTags = withTags(Main);


const App = () => {
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
};

export default App;
