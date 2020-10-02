import React from 'react';
import Main from '../main/main';
import Content from '../content/content';
import {BrowserRouter, Switch, Router} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/">
          <Main />
        </Router>

        <Router path="/news">
          <Content />
        </Router>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
