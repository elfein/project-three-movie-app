import React, { Component } from 'react'
import AttendeeItem from './AttendeeItem';

export default class AttendeeList extends Component {
    render() {

        const attendeeList = this.props.attendees.map((attendee, i) => {
            return <AttendeeItem key={i} src={attendee.image}
            name={attendee.name} />
        })

        return (
            <div>
                {attendeeList}
            </div>
        )
    }
}
