import React, { Component } from 'react'

export default class AttendeeItem extends Component {
    render() {
        return (
            <div>
                <img style={{ width: 30 + 'px' }} src={this.props.src} alt='attendee profile' />
                <span>{this.props.name}</span>
            </div>
        )
    }
}
