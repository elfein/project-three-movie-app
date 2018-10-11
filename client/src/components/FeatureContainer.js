import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
img {
  height: 300px;
  margin: 0 20px;
}
h3 {
  margin: 10px 0;
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
      <div>
        <h2>Current winner: {feaName}</h2>
        <StyledDiv>
          <img src={imgSrc} alt='feature pic' />
          <div>
            <h3>Genre: {genre}</h3>
            <h3>Votes: {votes}</h3>
          </div>
        </StyledDiv>
      </div>
    )
  }
}
