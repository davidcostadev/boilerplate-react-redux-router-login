import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <Link to="/">Home</Link> - 
    <Link to="/private">Private</Link> - 
    <Link to="/about">About</Link>
    <h1>Login</h1>    
    Email<br />
    <input type="email" />
    Password<br />  
    <input type="password" />
    <button>Entrar</button>
  </div>
)
