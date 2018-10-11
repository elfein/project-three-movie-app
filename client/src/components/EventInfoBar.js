import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventInfoBar extends Component {

    render() {

        return (
            <div>
                <h2>Information</h2>
                <Link to={`/events/${this.props.params.eventId}/edit`}>Edit</Link>
                <h4>Date</h4>
                <h3>{this.props.date}</h3>
                {this.props.host ? 
                <div>
                    <h4>Hosted by {this.props.host}</h4>
                </div> :
            null}
                {this.props.about ?
                    <div>
                        <h4>About this Movie Night</h4>
                        <p>{this.props.about}</p>
                    </div> :
                    null}
            </div>
        )
    }
}
