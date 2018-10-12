import React, { Component } from 'react'
import SuggestionItem from './SuggestionItem';
import styled from 'styled-components'

const StyledDiv = styled.div`
#title {
  text-align: center;
  margin: 30px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
    margin: 0 10px;
    font-family: 'Niconne', cursive;
    font-weight: 400;
    font-size: 2em;
    letter-spacing: 0.1em;
    margin: 15px 0 0 0;
}
button {
  background: none;
  border: none;
  color: #fff;
  font-size: 0.7em;
padding: 4px 0;
    :hover {
        transform: scale(1.1);
        transition: transform ease 0.2s;
    }
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
