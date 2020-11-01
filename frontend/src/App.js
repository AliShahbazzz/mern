import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Root from './components/root/root';
import Home from './components/home';
import Login from './components/login/login';
import Register from './components/register/register';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Root><Home /></Root>} />
        <Route path="/login" render={() => <Root><Login /></Root>} />
        <Route path="/register" render={() => <Root><Register /></Root>} />
        <Route path="/list" render={() => <Main />} />
      </Router>
    );
  }
}

export default App;