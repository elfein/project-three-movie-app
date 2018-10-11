import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
button{
  margin: 0 auto;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input {
  display: block;
  margin: 8px;
}
`

export default class NewSuggestionForm extends Component {

  clearAndSubmit = (event) => {
    this.props.chooseChoice()
    this.props.handleSubmit(event)
    document.getElementById('img').setAttribute('value', '')
  }

  render() {
    return (
      <StyledDiv>
        <button onClick={this.props.chooseChoice} >Cancel</button>
        <form onSubmit={this.clearAndSubmit} >
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
            id='img'
            placeholder='Image Address'
            type='text'
            name='img'
            onBlur={this.props.handleChange}
          />

          <input type='submit' value='Add Suggestion' />
        </form>
      </StyledDiv>
    )
  }
}
