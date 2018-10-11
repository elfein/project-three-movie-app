import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
h3 {
  font-family: 'Niconne', cursive;
  margin: 0;
  padding: 9px;
}
a {
  text-decoration: none;
  color: rgb(255,255,255);
}
`

export default class SplashLink extends Component {
  render() {
    return (
      <StyledDiv>
        <Link to='/'><h3>S</h3></Link>
      </StyledDiv>
    )
  }
}
