import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom' 
import store from './store'


import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import Login from './pages/Login'
import Private from './pages/Private'


import createHistory from 'history/createBrowserHistory'

const PrimaryLayout = props => (
  <div className="primary-layout">
    <header>
      <Link to="/">Home</Link> - 
      <Link to="/private">Private</Link> - 
      <Link to="/about">About</Link>
    </header>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/private" component={Private} />
    </main>
  </div>
)


render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <div>
        header
        <Switch>
          <PrimaryLayout />
          
          <Route component={Page404} />
        </Switch> 
        footer
      </div>  
    </Router>  
  </Provider>,
  document.getElementById('root')
)
