import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location }) => (
  <div>
    <Link to="/">Home</Link> - 
    <Link to="/private">Private</Link> - 
    <Link to="/about">About</Link>
    <h1>404</h1>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
