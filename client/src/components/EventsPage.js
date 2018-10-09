import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import EventItem from './EventItem';

export default class EventsPage extends Component {
    state = {
        events: []
    }

    getEvents = async () => {
        const response = await axios.get('/api/events')
        this.setState({ events: response.data })
    }

    componentDidMount = () => {
        this.getEvents()
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
            </div>
        )
    }
}
