import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import EventItem from './EventItem';
import NewEventForm from './NewEventForm';

export default class EventsPage extends Component {
    state = {
        events: [],
        showNewForm: false,
        newEvent: {
            name: '',
            host: '',
            date: '',
            about: ''
        }
    }

    getEvents = async () => {
        const response = await axios.get('/api/events')
        this.setState({ events: response.data })
    }

    componentDidMount = () => {
        this.getEvents()
    }

    clickHandler = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    handleChange = (event) => {
        const newEvent = {...this.state.newEvent}
        newEvent[event.target.name] = event.target.value
        this.setState({ newEvent })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('/api/events', this.state.newEvent)
        console.log(response)
        const events = [...this.state.events]
        events.push(response.data)
        this.setState({ events })
    }

    render() {
        const eventList = this.state.events.map((event, i) => {
            return <EventItem key={i}
                id={event._id}
                name={event.name}
                date={event.date} />
        })

        return (
            <div>
                <NavBar title={'All Movie Nights'} />
                {eventList}
                {this.state.showNewForm ? 
                <div>
                <button onClick={this.clickHandler}>Cancel</button>
                <NewEventForm
                handleSubmit={this.handleSubmit}
                handleChange={(event) => this.handleChange(event)}
                newEvent={this.state.newEvent} />
                </div> :
                <button onClick={this.clickHandler}>Host a movie night!</button>}
            </div>
        )
    }
}