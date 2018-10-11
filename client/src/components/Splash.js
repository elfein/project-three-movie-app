import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
h3 {
  font-size: 3vmin;
  transform: translateX(-30%);
  margin: 0;
}
h1 {
  font-family: 'Niconne', cursive;
  letter-spacing: -0.01em;
  font-size: 24vmin;
  margin: 0;
  transform:rotate(-5deg);
  margin: -20px 0 0 0;
}
h2 {
  font-size: 6vmin;
  margin: 0;
  transform: translateX(14%);
}
a {
  color: white;
  text-decoration: none;
}
#wrapper {
  max-width: 800px;
  width: 80vw;
  text-align: center;
}
`

export default class Splash extends Component {
  render() {
    return (
      <StyledDiv>
        <Link to='/events'>
          <div id="wrapper">
            <h3>Welcome to</h3>
            <h1>Starlight</h1>
            <h2>Movie Nights</h2>
          </div>
        </Link>
      </StyledDiv>
    )
  }
}
