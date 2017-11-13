import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom' 
import store from './store'


import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import Login from './pages/Login'
import Private from './pages/Private'


import createHistory from 'history/createBrowserHistory'

render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <div>
        header
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/private" component={Private} />
          <Route component={Page404} />
        </Switch> 
        footer
      </div>  
    </Router>  
  </Provider>,
  document.getElementById('root')
)
