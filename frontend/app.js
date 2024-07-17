import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
