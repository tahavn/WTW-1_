import React from 'react';
import Main from '../main/main';
import Content from '../content/content';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import Film from '../film/film';
import Mylist from '../mylist/mylist';
import Player from '../player/player';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import {films} from '../../../mocks/films'
import {tags} from '../../../mocks/tags'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
          <Content />
        </Route>
        <Route path="/singin">
          <Singin />
        </Route>
        <Route
          path="/films/:id/review"
          render={(props) => {
            return <Addreview {...props} />;
          }}
        />
        <Route
          path="/films/:id"
          exact
          render={(props) => {
            return <Film {...props} />;
          }}
        />
        <Route path="/mylist">
          <Mylist />
        </Route>
        <Route
          path="/player/:id"
          render={(props) => {
            return <Player {...props} />;
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
};

export default App;
