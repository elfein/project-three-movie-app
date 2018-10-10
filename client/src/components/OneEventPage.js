import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar';
import EventInfoBar from './EventInfoBar';
import FeatureContainer from './FeatureContainer';
import SuggestionList from './SuggestionList';
import SuggestionChoice from './SuggestionChoice';
import AttendeeList from './AttendeeList';

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
            img: ''
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
            <div>
                <NavBar title={this.state.event.name} />
                <div>
                    <EventInfoBar
                        date={this.state.event.date}
                        about={this.state.event.about} />
                    <AttendeeList attendees={this.state.attendees} />
                    <Link to={`/events/${this.props.match.params.eventId}/edit`}>Edit</Link>
                </div>
                <FeatureContainer feature={this.state.event.feature} />
                <div>
                    <SuggestionList
                        currentUser={this.state.currentUser}
                        modeToggle={this.modeToggle}
                        suggestions={this.state.event.suggestions}
                        editMode={this.state.editMode}
                        handleDelete={this.handleDelete}
                        handleUserChange={this.handleUserChange}
                        handleUserSubmit={this.handleUserSubmit} />
                    {this.state.showSuggestionForm ?
                        <SuggestionChoice
                            addSearchSuggestion={this.addSearchSuggestion}
                            clickHandle={this.onClick}
                            newSuggest={this.state.newSuggest}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit} />
                        :
                        <button onClick={this.onClick} >Add Suggestion</button>}
                </div>
            </div>
        )
    }
}
