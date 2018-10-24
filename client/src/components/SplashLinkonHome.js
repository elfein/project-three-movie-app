import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
align-items: center;
h3 {
  font-family: 'Niconne', cursive;
  margin: 0;
  padding: 9px;
}
a {
  text-decoration: none;
  color: rgb(255,255,255);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 200;
}
a:hover {
  transform: scale(1.03);
  transition: transform ease 0.18s;
}
`

export default class SplashLink extends Component {
  render() {
    return (
      <StyledDiv>
        <Link to='/'><h3>S</h3></Link>
        <a target="_blank" href="https://github.com/elfein/project-three-movie-app/">GitHub</a>
      </StyledDiv>
    )
  }
}
