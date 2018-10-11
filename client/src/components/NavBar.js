import React, { Component } from 'react'
import SplashLink from './SplashLink';
import styled from 'styled-components'

const StyledDiv = styled.div`
color: rgb(255,255,255);
display: flex;
justify-content: center;
align-items: center;
height: 40px;
text-align: center;
#index {
  position: absolute;
  left: 0px;
  top: 0px;
}
h1 {
  margin: 0;
  max-width: 80vw;
  font-weight: 200;
  font-size: 1.2em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  letter-spacing: 0.1em;
}
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledDiv>
        <div id='index' ><SplashLink /></div>
        <h1>{this.props.title}</h1>
      </StyledDiv>
    )
  }
}
