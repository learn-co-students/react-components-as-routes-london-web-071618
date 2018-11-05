import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Home'
import About from './About'
import Login from './Login'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const link = {
  widht: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () => {
  return <div>
    <NavLink
      to='/'
      exact
      style={link}
      activestyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to='/about'
      exact
      style={link}
      activestyle={{
        backround: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to='/login'
      exact
      style={link}
      activestyle={{
        background: 'darkBlue'
      }}
    >Login</NavLink>
  </div>
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
)
