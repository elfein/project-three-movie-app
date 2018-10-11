import React, { Component } from 'react'
import AttendeeItem from './AttendeeItem';
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
`

export default class AttendeeList extends Component {
    render() {

        const attendeeList = this.props.attendees.map((attendee, i) => {
            return <AttendeeItem key={i} src={attendee.image}
            name={attendee.name} />
        })

        return (
            <StyledDiv>
                {attendeeList}
            </StyledDiv>
        )
    }
}
