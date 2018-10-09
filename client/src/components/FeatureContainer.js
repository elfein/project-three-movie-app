import React, { Component } from 'react'

export default class FeatureContainer extends Component {
  render() {
      const feature = this.props.feature
      let imgSrc = ''
      let feaName = ''
      let votes = ''
      if (feature) {
          imgSrc = feature.img
          feaName = feature.name
          votes = feature.supporters.length
      }

    return (
      <div>
          <h2>Current winner: {feaName}</h2>
        <img width='200px' src={imgSrc} alt='feature pic' />
        <h3>Votes: {votes}</h3>
      </div>
    )
  }
}
