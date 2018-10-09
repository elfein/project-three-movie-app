import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventItem extends Component {
    render() {
        return (
            <Link to={`/events/${this.props.id}`}>
                <h3>{this.props.name}</h3>
                <h5>{this.props.date}</h5>
            </Link>
        )
    }
}
