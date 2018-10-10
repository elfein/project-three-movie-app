import React, { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <div onClick={() => this.props.addSearchSuggestion(this.props.name, this.props.image, this.props.genre)}>
        <button>Add Suggestion</button>
        <h5>{this.props.name}</h5>
        <img src={this.props.image} alt='result img' />
      </div>
    )
  }
}
