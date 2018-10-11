import React, { Component } from 'react'
import SuggestionItem from './SuggestionItem';
import styled from 'styled-components'

const StyledDiv = styled.div`
#title {
  text-align: center;
  margin: 30px 0 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  display: inline;
  margin: 0 10px;
}
`

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
      <StyledDiv>
        <div id='title' >
          <h2>Choices</h2>
          <button onClick={this.props.modeToggle}>Edit</button>
        </div>
        {suggestionList}
      </StyledDiv>
    )
  }
}
