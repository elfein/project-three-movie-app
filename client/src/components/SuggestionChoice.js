import React, { Component } from 'react'
import NewSuggestionForm from './NewSuggestionForm';

export default class SuggestionChoice extends Component {
    state = {
        showChoice: true,
        searchCase: false,
        inputCase: false
    }

    chooseSearch = () => {
        this.setState({ showChoice: false, searchCase: true, inputCase: false })
    }

    chooseInput = () => {
        this.setState({ showChoice: false, searchCase: false, inputCase: true })
    }

    chooseChoice = () => {
        this.setState({ showChoice: true, searchCase: false, inputCase: false })
    }

    render() {
        return (
            <div>
                {this.state.showChoice ?
                    <div>
                        <button onClick={this.props.clickHandle} >Cancel</button>
                        <button onClick={this.chooseSearch} >Search for movie</button>
                        <p>or</p>
                        <button onClick={this.chooseInput} >Input your own movie info</button>
                    </div>
                    : null}
                {this.state.searchCase ?
                    <div>
                        <button onClick={this.chooseChoice} >Cancel</button>
                        <p>search!</p>
                    </div> :
                    null}
                {this.state.inputCase ?
                    <NewSuggestionForm
                        chooseChoice={this.chooseChoice}
                        newSuggest={this.props.newSuggest}
                        handleChange={this.props.handleChange}
                        handleSubmit={this.props.handleSubmit}
                    /> :
                    null}
            </div>
        )
    }
}
