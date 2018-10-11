import React, { Component } from 'react'
import NewSuggestionForm from './NewSuggestionForm';
import MovieSearch from './MovieSearch';
import styled from 'styled-components'

const StyledDiv = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: scale(1.0) translate(-50%, -50%);
background: rgb(30, 60, 100);
padding: 30px;
opacity: 1;
z-index: 1010;
padding: 30px;
background: rgb(30,90,120);
transition: transform 0.2s ease, opacity 0.2s ease;
max-height: 100%;
max-width: 100%;
&.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
}
button {
    display: block;
}
`

const StyledCase = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button {
    margin: 10px;
}
p {
    margin: 5px;
}
`

const StyledOverlay = styled.div`
#modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250,250,255,0.5);
  display: flex;
  opacity: 1;
  transition: opacity .2s;
  &.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
}
}
`

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

    overlayClick = () => {
        this.props.clickHandler()
        this.chooseChoice()
    }

    render() {
        return (
            <StyledOverlay>
                <StyledDiv className={this.props.showSuggestionForm ? '' : "hidden"}>
                    {this.state.showChoice ?
                        <StyledCase>
                            <button onClick={this.props.clickHandler} >Cancel</button>
                            <button onClick={this.chooseSearch} >Search for movie</button>
                            <p>or</p>
                            <button onClick={this.chooseInput} >Input your own movie info</button>
                        </StyledCase>
                        : null}
                    {this.state.searchCase ?
                        <StyledCase>
                            <button onClick={this.chooseChoice} >Cancel</button>
                            <MovieSearch
                                chooseChoice={this.chooseChoice}
                                addSearchSuggestion={this.props.addSearchSuggestion} />
                        </StyledCase> :
                        null}
                    {this.state.inputCase ?
                        <NewSuggestionForm
                            chooseChoice={this.chooseChoice}
                            newSuggest={this.props.newSuggest}
                            handleChange={this.props.handleChange}
                            handleSubmit={this.props.handleSubmit}
                        /> :
                        null}

                </StyledDiv>
                <div id='modal-overlay'
                    onClick={this.overlayClick}
                    className={this.props.showSuggestionForm ? '' : "hidden"}>
                </div>
            </StyledOverlay >
        )
    }
}
