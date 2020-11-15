import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router as BrowserRouter, Switch, Route, Link} from 'react-router-dom';
// import Content from '../content/content';
import Main from '../main/main';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import MoviePage from '../pages/movie/movie';
import Player from '../player/player';
import PrivateRouter from '../private-route/private-route';
import history from '../../history';
import MylistPage from '../pages/mylist-page/mylist-page';
import PlayerMyTest from '../player/player-test';
import withPlayer from '../../hocs/withPlayer/withPlayer';
import withTags from '../../hocs/with-tags/with-tags';
import Loading from '../loading/loading';
import {getIsLoading} from '../../store/data/data-selector';
import withComment from '../../hocs/with-comment/with-comment';
import Mylist from '../mylist/mylist';

const VideoWrappedPlayer = withPlayer(Player);
const MainWithTags = withTags(Main);
const AddreviewWrapped = withComment(Addreview);

const App = (props) => {
  const {isLoading} = props;
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <MainWithTags history={history} />;
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
            const selectedID = +routerProps.match.params.id;
            return !isLoading ? (
              <div style={{background: `black`, height: `100vh`}}>
                <Loading />
              </div>
            ) : (
              <AddreviewWrapped selectedID={selectedID} history={history} />
            );
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
              <MoviePage selectedID={selectedID} history={history} />
            );
          }}
        />
        <PrivateRouter
          path="/mylist"
          render={() => {
            return <MylistPage path={`/mylist`} />;
          }}
        />
      {/* <PrivateRouter  path="/mylist" component={Mylist}  /> */}
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
