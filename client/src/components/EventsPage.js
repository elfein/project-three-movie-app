import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import EventItem from './EventItem';
import NewEventForm from './NewEventForm';
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
button, [type~=submit] {
    margin: 20px;
    background: none;
    color: #ffffff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 200;
    font-size: 2em;
    border-top: 1px solid rgba(255,255,255,.4);
    border-bottom: 1px solid rgba(255,255,255,.4);
    border-left: none;
    border-right: none;
    :hover {
        transform: scale(1.02);
        transition: transform ease 0.2s;
    }
}
input {
    color: rgb(30, 60, 100);
    padding: 4px;
    border-radius: 3px;
}
`

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
        const newEvent = { ...this.state.newEvent }
        newEvent[event.target.name] = event.target.value
        this.setState({ newEvent })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        if (this.state.newEvent.name) {
        const response = await axios.post('/api/events', this.state.newEvent)
        const events = [...this.state.events]
        events.push(response.data)
        this.setState({ events })
        this.clickHandler()
        this.setState({
            newEvent: {
                name: '',
                host: '',
                date: '',
                about: ''
            }
        })
    } 
    }

    render() {
        const eventList = this.state.events.map((event, i) => {
            return <EventItem key={i}
                id={event._id}
                name={event.name}
                date={event.date} />
        })

        return (
            <StyledDiv>
                <NavBar 
                title={'All Movie Nights'}
                onHome={true} />
                {eventList}
                <NewEventForm
                    showNewForm={this.state.showNewForm}
                    clickHandler={this.clickHandler}
                    handleSubmit={this.handleSubmit}
                    handleChange={(event) => this.handleChange(event)}
                    newEvent={this.state.newEvent} />
                <button onClick={this.clickHandler}>Host a movie night!</button>
            </StyledDiv>
        )
    }
}