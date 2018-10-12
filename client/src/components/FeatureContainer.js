import React, { Component } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
max-width: 90vw;
margin: 0 auto;
`

const StyledTitle = styled.div`
text-align: center;
h1 {
  font-family: 'Niconne', cursive;
    font-weight: 400;
    font-size: 2.2em;
    letter-spacing: 0.1em;
    margin: 15px 0 0 0;
}
h2 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 400;
    letter-spacing: 0.1em;
    font-size: 1.8em;
    margin: 28px 0 10px 0;
    border-top: 1px solid rgba(255,255,255,0.4);
    padding-top: 10px;
}
`

const StyledDiv = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
display: flex;
padding-bottom: 20px;
border-bottom: 1px solid rgba(255,255,255, 0.6);
img {
  height: 200px;
  margin: 0 20px 0 0;
}
h3 {
  margin: 10px 0;
  font-weight: 200;
  font-size: 1.5em;
}
`

export default class FeatureContainer extends Component {
  render() {
    const feature = this.props.feature
    let imgSrc = ''
    let feaName = ''
    let votes = ''
    let genre = ''
    if (feature) {
      imgSrc = feature.img
      feaName = feature.name
      genre = feature.genre
      votes = feature.supporters.length
    }

    return (
      <StyledContainer>
        <StyledTitle>
          <h1>Current Winner</h1>
          <h2>{feaName}</h2>
        </StyledTitle>
        <StyledDiv>
          <img src={imgSrc} alt='feature pic' />
          <div>
            <h3>Genre: {genre}</h3>
            <h3>Votes: {votes}</h3>
          </div>
        </StyledDiv>
      </StyledContainer>
    )
  }
}
