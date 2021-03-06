import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './App';
import Image from './components/Image/Image'
import About from './pages/About/About'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<Route path="/img" component={Image}/>
    	<Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'))