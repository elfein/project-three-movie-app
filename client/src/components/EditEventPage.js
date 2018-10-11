import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import EditEventForm from './EditEventForm'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: 0 20vw;
#delete {
    margin: 40px 0;
    display: block;
}
`

export default class EditEventPage extends Component {
    state = {
        event: {
            name: '',
            host: '',
            date: '',
            about: ''
        },
        showMessage: false,
        redirect: false,
        showDelete: false
    }

    getEvent = async () => {
        const eventId = this.props.match.params.eventId
        const event = await axios.get(`/api/events/${eventId}`)
        this.setState({ event: event.data })
    }

    componentDidMount = async () => {
        await this.getEvent()
    }

    deleteEvent = async () => {
        await axios.delete(`/api/events/${this.props.match.params.eventId}`)
    }

    handleChange = (event) => {
        const editEvent = { ...this.state.event }
        editEvent[event.target.name] = event.target.value
        this.setState({ event: editEvent })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.put(`/api/events/${this.props.match.params.eventId}`, this.state.event)
        this.setState({ showMessage: true })
        setTimeout(() => { this.setState({ redirect: true }) }, 1000)
    }

    showDelete = () => {
        this.setState({ showDelete: !this.state.showDelete })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/events/${this.props.match.params.eventId}`} />)
        }

        return (
            <div>
                <NavBar title={'Edit ' + this.state.event.name} />
                <StyledDiv>
                    <EditEventForm
                        handleSubmit={this.handleSubmit}
                        handleChange={(event) => this.handleChange(event)}
                        event={this.state.event} />
                    <div><Link to={`/events/${this.props.match.params.eventId}`}>Cancel</Link></div>
                    {this.state.showMessage ?
                        <h3>Event updated!</h3> :
                        null}

                    {this.state.showDelete ?
                        <div>
                            <p>Are you sure you want to delete {this.state.event.name}?</p>
                            <button onClick={this.showDelete}>Cancel</button>
                            <p>or</p>
                            <Link to='/events' ><button onClick={this.deleteEvent}>Delete Event :(</button></Link>
                        </div>
                        :
                        <button id='delete' onClick={this.showDelete}>Delete Event?</button>}
                </StyledDiv>
            </div>
        )
    }
}
