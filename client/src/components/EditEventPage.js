import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class EditEventPage extends Component {
    state = {
        event: {}
    }

    getEvent = async () => {
        const eventId = this.props.match.params.id
        const event = await axios.get(`/api/events/${eventId}`)
        this.setState({ event: event.data })
    }

    componentDidMount = async () => {
        await this.getEvent()
    }

    deleteEvent = async () => {
        await axios.delete(`/api/events/${this.props.match.params.id}`)
    }

    render() {
        return (
            <div>
                <NavBar title={'Delete ' + this.state.event.name} />
                <Link to='/events' ><button onClick={this.deleteEvent}>Delete Event :(</button></Link>
            </div>
        )
    }
}
