import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default () => {
  // simulate a function verification
  if (true) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      this is a page private
    </div>
  )
}  
