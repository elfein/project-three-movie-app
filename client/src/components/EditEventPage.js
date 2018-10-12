import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import EditEventForm from './EditEventForm'
import styled from 'styled-components'

const StyledDiv = styled.div`
@keyframes show {
    0% {transform: scale(.95) translateY(4%); opacity: 0;}
    100% {transform: scale(1); opacity: 1;}
}
animation: show .2s 1;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 200;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
color: #ffffff;
#delete {
    margin: 30px 0;
    display: block;
}
a {
    color: #fff;
    text-decoration: none;
}
a:hover {
    transform: scale(1.1);
    transition: transform ease 0.2s;
}
button, [type~=submit] {
    margin: 20px 0 5px 0;
    padding: 4px 0;
    background: none;
    color: #ffffff;
    font-size: 1.4em;
    border-top: 1px solid rgba(255,255,255,.4);
    border-bottom: 1px solid rgba(255,255,255,.4);
    border-left: none;
    border-right: none;
    :hover {
        transform: scale(1.02);
        transition: transform ease 0.2s;
    }
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
