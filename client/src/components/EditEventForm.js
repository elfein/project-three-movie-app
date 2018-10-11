import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
input {
    display: block;
    margin: 0 0 10px 0;
    width: 80%;
}
p {
    font-size: 0.2em;
    margin: 10px 0 5px 0;
}
[type~=submit] {
    width: 100px;
    text-align: center;
}
`

export default class EditEventForm extends Component {
    render() {
        return (
            <StyledDiv>
                <form onSubmit={(event) => this.props.handleSubmit(event)} >
                    <p>Event Name</p>
                    <input
                        placeholder='Event Name'
                        type='text'
                        name='name'
                        value={this.props.event.name}
                        onChange={this.props.handleChange}
                    />

                    <p>Host Name</p>
                    <input
                        placeholder='Host Name'
                        type='text'
                        name='host'
                        value={this.props.event.host}
                        onChange={this.props.handleChange}
                    />

                    <p>Date</p>
                    <input
                        placeholder='Date'
                        type='text'
                        name='date'
                        value={this.props.event.date}
                        onChange={this.props.handleChange}
                    />

                    <p>Event Description</p>
                    <input
                        placeholder='Event Description'
                        type='text'
                        name='about'
                        value={this.props.event.about}
                        onChange={this.props.handleChange}
                    />

                    <input type='submit' value='Update Event' />
                </form>
            </StyledDiv>
        )
    }
}
