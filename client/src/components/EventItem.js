import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
padding: 14px;
margin: 8px;
border-bottom: 1px solid rgba(255,255,255,.4);
border-top: 1px solid rgba(255,255,255,.1);
transition: transform ease 0.2s;
a {
    margin: 0;
    color: rgba(255,255,255, .75);
    text-decoration: none;
}
h5 {
    margin: 2px 0 0 0;
}
h3 {
    margin: 0px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 200;
    letter-spacing: 0.2em;
    color: rgba(255,255,255);
    font-size: 1.8em;
}
:hover {
    transform: scale(1.02);
    transition: transform ease-in-out 0.2s;
}
`

export default class EventItem extends Component {
    render() {
        return (
            <StyledDiv>
                <Link to={`/events/${this.props.id}`}>
                    <h3>{this.props.name}</h3>
                    <h5>{this.props.date}</h5>
                </Link>
            </StyledDiv>
        )
    }
}
