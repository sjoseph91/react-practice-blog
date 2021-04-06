//server npx json-server --watch data/db.json --port 8000
//Finished # 24-22
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
  , and when cleaning up the use effect hook, we need to return return () => abortCont.abort()
  
  Lesson25: Route parameters- the blog details page needed access to the route parameter so we imported useParams hook and 
    were able to access the id that way.
  Lesson 26:
    We reused our custom hook in the blog details page. Imported it and then destructured the data, isPending, and error.
    We conditionally rendered those components and added styles
  Lesson 27 - 28 set up Controlled form

*/