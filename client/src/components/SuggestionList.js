import React, { Component } from 'react'
import SuggestionItem from './SuggestionItem';

export default class SuggestionList extends Component {
  render() {
      const suggestions = this.props.suggestions
      let suggestionArr = []
      if (suggestions) {
        suggestionArr = [...suggestions]
      }
      
      const suggestionList = suggestionArr.map((suggestion, i) => {
          return <SuggestionItem key={i} 
          toggleShowForm={this.props.toggleShowForm}
          currentUser={this.props.currentUser}
          suggestion={suggestion} 
          editMode={this.props.editMode}
          handleDelete={this.props.handleDelete}
          handleUserChange={this.props.handleUserChange}
          handleUserSubmit={this.props.handleUserSubmit} />
      })

    return (
      <div>
        <h3>Choices</h3>
        <button onClick={this.props.modeToggle}>Edit</button>
        {suggestionList}
      </div>
    )
  }
}
