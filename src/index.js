import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About'
import Login from './Login'
import Navbar from './Navbar'



const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};


ReactDOM.render((
  <Router >
    <React.Fragment>
      <Navbar />
      <Route path="/" render={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
    </React.Fragment>



  </Router>),
  document.getElementById('root')
);
