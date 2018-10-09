import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SplashLink extends Component {
  render() {
    return (
      <div>
        <Link to='/events'><h1>Index</h1></Link>
      </div>
    )
  }
}
