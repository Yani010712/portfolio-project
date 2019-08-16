import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/projects/">Projects</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={About} />
        <Route path="/projects/" component={Projects} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default AppRouter;