import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './NavBar';
import EventInfoBar from './EventInfoBar';
import FeatureContainer from './FeatureContainer';
import SuggestionList from './SuggestionList';
import SuggestionChoice from './SuggestionChoice';
import AttendeeList from './AttendeeList';
import styled from 'styled-components'

const StyledDiv = styled.div`
main {
    display: flex;
    justify-content: center;
}
#all-info {
    margin: 0 30px;
    width: 300px;
}
#movies {
    max-width: 600px;
    h2 {
        text-align: center;
    }
}
#suggest-btn {
    text-align: center;
    margin: 8px 0 30px 0;
}
@media (max-width: 760px) {
    main {
        flex-direction: column;
        align-items: center;
    }
    #all-info {
        h2 {
            text-align: center;
        }
    }
}
`

export default class OneEventPage extends Component {
    state = {
        event: {
            suggestions: []
        },
        attendees: [],
        newSuggest: {
            name: '',
            genre: '',
            minutes: '',
            img: 'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279'
        },
        showSuggestionForm: false,
        editMode: false,
        currentUser: {
            name: '',
            image: 'https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg'
        }
    }

    getEvent = async () => {
        const eventId = this.props.match.params.eventId
        const event = await axios.get(`/api/events/${eventId}`)
        this.setState({ event: event.data })
        this.tallyVotes()
    }

    componentDidMount = async () => {
        await this.getEvent()
        await this.getAttendees()
    }

    getAttendees = async () => {
        const attendees = [...this.state.attendees]
        this.state.event.suggestions.forEach(suggestion => {
            suggestion.supporters.forEach(supporter => {
                if (!attendees.find((listedSupporter) => listedSupporter.name === supporter.name)) {
                    attendees.push(supporter)
                }
            })
        })
        this.setState({ attendees })
    }

    tallyVotes = () => {
        const event = { ...this.state.event }
        if (event.suggestions[0]) {
            // find suggestion with greatest supporters.length
            // set 'most supported'
            let mostSupported = { supporters: [] }
            // go through suggestions, comparing mostsupported.supporters.length to next one
            event.suggestions.forEach(suggestion => {
                if (mostSupported.supporters.length < suggestion.supporters.length) {
                    // if next one is greater, mostsupported = next one
                    mostSupported = suggestion
                }
            })
            // return most supported
            //then set event.feature to most supported
            event.feature = mostSupported
            this.setState({ event })
        }
    }

    onClick = () => {
        this.setState({ showSuggestionForm: !this.state.showSuggestionForm })
    }

    handleChange = (event) => {
        const newSuggest = { ...this.state.newSuggest }
        newSuggest[event.target.name] = event.target.value
        this.setState({ newSuggest })
    }

    handleUserChange = (event) => {
        const currentUser = { ...this.state.currentUser }
        currentUser[event.target.name] = event.target.value
        this.setState({ currentUser })
    }

    addSearchSuggestion = async (movieName, movieImage, movieGenre) => {
        const newSuggest = { ...this.state.newSuggest }
        newSuggest.name = movieName
        newSuggest.img = movieImage
        newSuggest.genre = movieGenre
        await this.setState({ newSuggest })
        this.handleSubmitNotForm()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.handleSubmitNotForm()
        this.setState({ newSuggest: {
            name: '',
            genre: '',
            minutes: '',
            img: ''
        }})
    }

    handleSubmitNotForm = async () => {
        const eventId = this.props.match.params.eventId
        await axios.post(`/api/events/${eventId}/movies`, this.state.newSuggest)
        await this.getEvent()
        this.onClick()
    }

    handleUserSubmit = async (event, movieId) => {
        event.preventDefault()
        const eventId = this.props.match.params.eventId
        await axios.post(`/api/events/${eventId}/movies/${movieId}/voters`, this.state.currentUser)
        await this.getEvent()
        await this.getAttendees()
        this.setState({ showUserForm: false })
    }

    handleDelete = async (movieId) => {
        const eventId = this.props.match.params.eventId
        await axios.delete(`/api/events/${eventId}/movies/${movieId}`)
        await this.getEvent()
        await this.getAttendees()
    }

    modeToggle = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    render() {

        return (
            <StyledDiv>
                <NavBar title={this.state.event.name} />
                <main>
                    <div id='all-info'>
                        <EventInfoBar
                            params={this.props.match.params}
                            date={this.state.event.date}
                            about={this.state.event.about} />
                        <h4>Attendee List</h4>
                        <AttendeeList attendees={this.state.attendees} />
                    </div>
                    <div id="movies">
                        <FeatureContainer feature={this.state.event.feature} />
                        <SuggestionList
                            currentUser={this.state.currentUser}
                            modeToggle={this.modeToggle}
                            suggestions={this.state.event.suggestions}
                            editMode={this.state.editMode}
                            handleDelete={this.handleDelete}
                            handleUserChange={this.handleUserChange}
                            handleUserSubmit={this.handleUserSubmit} />
                        <SuggestionChoice
                            showSuggestionForm={this.state.showSuggestionForm}
                            addSearchSuggestion={this.addSearchSuggestion}
                            clickHandler={this.onClick}
                            newSuggest={this.state.newSuggest}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit} />
                    <div id='suggest-btn'>
                        <button onClick={this.onClick} >Add Suggestion</button>
                    </div>
                    </div>
                </main>
            </StyledDiv>
        )
    }
}
