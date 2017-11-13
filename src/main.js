import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import store from './store'


import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'

render(
  <Provider store={store}>
    <Router>
      <div>
       header
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route component={Page404} />
        </Switch> 
        footer
      </div>  
    </Router>  
  </Provider>,
  document.getElementById('root')
)
