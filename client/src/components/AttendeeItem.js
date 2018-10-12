import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
:hover {
        transform: scale(1.1);
        transition: transform ease 0.2s;
    }
margin: 10px;
display: flex;
align-items: center;
img {
    height: 30px;
    width: 30px;
    border-radius:100%;
    margin: 0 8px 0 0;
}
`


export default class AttendeeItem extends Component {
    render() {
        return (
            <StyledDiv>
                <img src={this.props.src} alt='attendee profile' />
                <span>{this.props.name}</span>
            </StyledDiv>
        )
    }
}
