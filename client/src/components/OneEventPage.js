import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar';
import EventInfoBar from './EventInfoBar';
import FeatureContainer from './FeatureContainer';
import SuggestionList from './SuggestionList';
import NewSuggestionForm from './NewSuggestionForm';

export default class OneEventPage extends Component {
    state = {
        event: {},
        attendees: [],
        newSuggest: {
            name: '',
            genre: '',
            minutes: ''
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
    }

    componentDidMount = async () => {
        await this.getEvent()
        await this.getAttendees()
    }

    getAttendees = async () => {
        const attendees = [...this.state.attendees]
        this.state.event.suggestions.forEach(suggestion => {
            suggestion.supporters.forEach(supporter => {
                if (attendees.indexOf(supporter.name)) {
                    attendees.push(supporter.name)
                }
            })
        })
        this.setState({ attendees })
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

    handleSubmit = async (event) => {
        event.preventDefault()
        const eventId = this.props.match.params.eventId
        await axios.post(`/api/events/${eventId}/movies`, this.state.newSuggest)
        await this.getEvent()
        this.setState({ showSuggestionForm: false })
    }

    handleUserSubmit = async (event, movieId) => {
        event.preventDefault()
        const eventId = this.props.match.params.eventId
        await axios.post(`/api/events/${eventId}/movies/${movieId}/voters`, this.state.currentUser)
        await this.getEvent()
    }

    handleDelete = async (movieId) => {
        const eventId = this.props.match.params.eventId
        await axios.delete(`/api/events/${eventId}/movies/${movieId}`)
        await this.getEvent()
    }

    modeToggle = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    render() {
        const attendeeList = this.state.attendees.map((attendee, i) => {
            return <li key={i}>{attendee}</li>
        })

        return (
            <div>
                <NavBar title={this.state.event.name} />
                <div>
                    <EventInfoBar
                        date={this.state.event.date}
                        about={this.state.event.about} />
                    <ul>{attendeeList}</ul>
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
                        <div>
                            <button onClick={this.onClick} >Cancel</button>
                            <NewSuggestionForm
                                newSuggest={this.state.newSuggest}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit} />
                        </div> :
                        <button onClick={this.onClick} >Add Suggestion</button>}
                </div>
            </div>
        )
    }
}
