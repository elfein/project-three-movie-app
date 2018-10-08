import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Splash extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to</h2>
        <h1>Starlight</h1>
        <h1>Movie Nights</h1>
        <Link to='/events'><h3>See Events</h3></Link>
      </div>
    )
  }
}
