import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import NavBar from './NavBar';
import EventInfoBar from './EventInfoBar';
import FeatureContainer from './FeatureContainer';
import SuggestionList from './SuggestionList';

export default class EventPage extends Component {
    state = {
        event: {},
        attendees: []
    }

    getEvent = async () => {
        const eventId = this.props.match.params.id
        const event = await Axios.get(`/api/events/${eventId}`)
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
                    <Link to={`/events/${this.props.match.params.id}/edit`}>Edit</Link>
                </div>
                <FeatureContainer feature={this.state.event.feature} />
                <SuggestionList suggestions={this.state.event.suggestions} />
            </div>
        )
    }
}
