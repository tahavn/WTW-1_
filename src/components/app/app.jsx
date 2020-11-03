import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
// import Content from '../content/content';
import Main from '../main/main';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import MoviePage from '../pages/movie/movie';
import Player from '../player/player';
import PrivateRouter from '../private-route/private-route';

import MylistPage from '../pages/mylist-page/mylist-page';
import PlayerMyTest from '../player/player-test';
import withPlayer from '../../hocs/withPlayer/withPlayer';
import withTags from '../../hocs/with-tags/with-tags';
import Loading from '../loading/loading';
import {getIsLoading} from '../../store/data/data-selector';

const VideoWrappedPlayer = withPlayer(Player);
const MainWithTags = withTags(Main);

const App = (props) => {
  const {isLoading} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => {
            return <MainWithTags history={routerProps.history} />;
          }}
        />
        {/* <Route exact path="/">

          </Route> */}
        <Route path="/singin">
          <Singin />
        </Route>
        <PrivateRouter
          path="/films/:id/review"
          render={(routerProps) => {
            return <Addreview {...routerProps} films={[`need films!`]} />; // todo: need
          }}
        />
        <Route
          path="/films/:id"
          exact
          render={(routerProps) => {
            const selectedID = +routerProps.match.params.id;
            return !isLoading ? (
              <div style={{background: `black`, height: `100vh`}}>
                <Loading />
              </div>
            ) : (
              <MoviePage selectedID={selectedID} history={routerProps.history} />
            );
          }}
        />
        <PrivateRouter
          path="/mylist"
          render={(routerProps) => {
            return <MylistPage path={`/mylist`} />;
          }}
        />

        <Route
          path="/player/:id"
          render={(routerProps) => {
            const selectedID = +routerProps.match.params.id;
            return !isLoading ? (
              <div style={{background: 'black', height: '100vh'}}>
                <Loading />
              </div>
            ) : (
              <VideoWrappedPlayer history={routerProps.history} selectedID={selectedID} {...props} />
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

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
});

App.propTypes = {
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
