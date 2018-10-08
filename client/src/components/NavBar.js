import React, { Component } from 'react'
import SplashLink from './SplashLink';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <SplashLink />
        {this.props.title}
      </div>
    )
  }
}
