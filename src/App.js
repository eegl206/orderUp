import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './style.css'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
