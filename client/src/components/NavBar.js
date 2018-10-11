import React, { Component } from 'react'
import SplashLink from './SplashLink';
import styled from 'styled-components'

const StyledDiv = styled.div`
color: rgb(255,255,255);
display: flex;
justify-content: center;
align-items: center;
height: 40px;
#index {
  position: absolute;
  left: 0px;
  top: 0px;
}
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledDiv>
        <div id='index' ><SplashLink /></div>
        {this.props.title}
      </StyledDiv>
    )
  }
}
