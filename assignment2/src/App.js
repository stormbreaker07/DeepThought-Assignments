import './App.css';

import Giphy from "./Giphy";
import Reddit from "./Reddit";
import history from "./hs";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";

function App() {
  return (
      <Router path="/" history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Reddit} />
            <Route exact path="/giphy" component={Giphy} />
            <Route exact path="/reddit" component={Reddit} />
            <Route component={Reddit} />
            <Route path='*' component={Reddit} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
