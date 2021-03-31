//server npx json-server --watch data/db.json --port 8000
//Finished # 24
import React from 'react';

import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
function App() {

 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

/* 
Lesson 24 use Cleanup. An erro occurred when I quickly switched from my home component to my New Blog component.
  This was because the fetch did not complete, and it thrown an error. To stop this from happening we need to associate 
  that fetch with a new Abort Controller const abortCont = new AbortController();
  fetch(url, { signal: abortCont.signal})
  , and when cleaning up the use effect hook, we need to return return () => abortCont.abort();

*/