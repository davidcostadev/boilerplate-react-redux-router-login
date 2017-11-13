import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <Link to="/">Home</Link> - 
    <Link to="/private">Private</Link> - 
    <Link to="/about">About</Link>
    <h1>About</h1>
  </div>
)
