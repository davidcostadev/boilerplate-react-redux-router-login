import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location }) => (
  <div>
    <h1>404</h1>
    <h3>No match for <code>{location.pathname}</code></h3>
    <Link to="/"> Home</Link>
  </div>
)
