import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img {
  width: 50%;
}
h5 {
  font-weight: 400;
    font-size: 1.2em;
    margin: 10px 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`

export default class Result extends Component {
  resetSearch = (name, image, genre) => {
    this.props.addSearchSuggestion(name, image, genre)
    this.props.resetSearch()
  }

  render() {
    return (
      <StyledDiv onClick={() => this.resetSearch(this.props.name, this.props.image, this.props.genre)}>
        <h5>{this.props.name}</h5>
        <img src={this.props.image} alt='result img' />
        <button>Add Suggestion</button>
      </StyledDiv>
    )
  }
}
