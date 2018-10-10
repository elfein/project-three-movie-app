import React, { Component } from 'react'

export default class NewSuggestionForm extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.chooseChoice} >Cancel</button>
        <form onSubmit={this.props.handleSubmit} >
          <input
            placeholder='Movie Name'
            type='text'
            name='name'
            value={this.props.newSuggest.name}
            onChange={this.props.handleChange}
          />

          <input
            placeholder='Genre'
            type='text'
            name='genre'
            value={this.props.newSuggest.genre}
            onChange={this.props.handleChange}
          />

          <input
            placeholder='Image Address'
            type='text'
            name='img'
            onBlur={this.props.handleChange}
          />

          <input type='submit' value='Add Suggestion' />
        </form>
      </div>
    )
  }
}
