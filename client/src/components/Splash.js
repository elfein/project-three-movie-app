import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
#wrapper {
transition: transform ease-in-out 0.3s;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
h3, h2 {
  font-weight: 200;
}
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
  text-shadow: 0 0 8px rgba(255,255,255,.9);
  transition: transform ease-in-out 0.2s;
}
h2 {
  font-size: 6vmin;
  margin: 0;
  transform: translateX(14%);
  text-shadow: 0 0 8px rgba(255,255,255,.9);
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
#wrapper:hover {
  h1{
  transform: rotate(-4deg) scale(1.04);
  transition: transform ease-in-out 0.12s;
  }
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
