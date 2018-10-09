import React, { Component } from 'react'
import SuggestionItem from './SuggestionItem';

export default class SuggestionList extends Component {
  render() {
      const suggestions = this.props.suggestions
      let suggestionArr = []
      if (suggestions) {
        suggestionArr = [...suggestions]
      }
      
      const suggestionList = suggestionArr.map((suggestion, i) => {
          return <SuggestionItem key={i} suggestion={suggestion} />
      })

    return (
      <div>
        {suggestionList}
      </div>
    )
  }
}
