import React, { Component } from 'react'

export default class EventItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h5>{this.props.date}</h5>
      </div>
    )
  }
}
