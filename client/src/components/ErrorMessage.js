import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';

const StyledDiv = styled.div`
color: #fff;
text-align: center;
height: 100%;
a {
  color: #fff;
}
`

export default class ErrorMessage extends Component {
  render() {
    return (
      <StyledDiv>
        <NavBar />
        <p>404: Page not found. :(</p>
        <p>Enjoy some stars, message your friend <a href='https://www.linkedin.com/in/emmy-feinberg/'>Emmy</a>.</p>
      </StyledDiv>
    )
  }
}
