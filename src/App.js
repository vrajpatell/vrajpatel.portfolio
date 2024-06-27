import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/experience">Work Experience</Link></li>
            <li><Link to="/projects">GitHub Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
