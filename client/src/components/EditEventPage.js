import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import EditEventForm from './EditEventForm'

export default class EditEventPage extends Component {
    state = {
        event: {
            name: '',
            host: '',
            date: '',
            about: ''
        },
        showMessage: false,
        redirect: false
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

    handleChange = (event) => {
        const editEvent = { ...this.state.event }
        editEvent[event.target.name] = event.target.value
        this.setState({ event: editEvent })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.put(`/api/events/${this.props.match.params.id}`, this.state.event)
        this.setState({ showMessage: true })
        setTimeout(() => {this.setState({ redirect: true })}, 1000)
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/events/${this.props.match.params.id}`}/>)
        }

        return (
            <div>
                <NavBar title={'Edit ' + this.state.event.name} />

                <EditEventForm
                    handleSubmit={this.handleSubmit}
                    handleChange={(event) => this.handleChange(event)}
                    event={this.state.event} />
                <Link to={`/events/${this.props.match.params.id}`}>Cancel</Link>
                {this.state.showMessage ? 
                <h3>Event updated!</h3> :
                null}
                <Link to='/events' ><button onClick={this.deleteEvent}>Delete Event :(</button></Link>
            </div>
        )
    }
}
