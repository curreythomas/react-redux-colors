import React, { Component } from 'react'
import { Route, Link, Switch, NavLink, BrowserRouter } from 'react-router-dom'
import { map } from 'ramda'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Show from './pages/show'
import index from './index.css'

import { connect } from 'react-redux'

const createNavLink = ({ url, description }) => {
  return (
    <NavLink
      exact
      activeClassName="bg-near-white navy"
      className="ph2 pv1 link br2 mh2 near-white"
      to={url}
    >
      {description}
    </NavLink>
  )
}

const menuItems = [
  {
    url: '/',
    description: 'Home'
  },
  {
    url: '/about',
    description: 'About'
  },
  {
    url: '/contact',
    description: 'Contact'
  }
]

const Menu = () => (
  <nav className="pa3 pa4-ns o-70">
    <div className="flex justify-center">{map(createNavLink, menuItems)}</div>
  </nav>
)

const App = props => {
  return (
    <BrowserRouter>
      <div className="avenir flex flex-column pa4">
        <header className=" avenir tracked tc br2 mb2 bg-near-white navy o-70">
          <h1>{props.title}</h1>
        </header>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:color" component={Show} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const connector = connect(state => ({ title: state.title }))
export default connector(App)
