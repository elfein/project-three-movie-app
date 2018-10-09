import React, { Component } from 'react'

export default class NewSuggestionForm extends Component {
  render() {
    return (
      <div>
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
            placeholder='Runtime in Minutes'
            type='number'
            name='minutes'
            value={this.props.newSuggest.minutes}
            onChange={this.props.handleChange}
            />

            <input type='submit' value='Add Suggestion' />
        </form>
      </div>
    )
  }
}
