import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
h2 {
    font-family: 'Niconne', cursive;
    font-weight: 400;
    font-size: 2em;
    letter-spacing: 0.1em;
    margin: 15px 0 0 0;
}
a {
    color: #fff;
    margin: 0;
    text-decoration: none;
    font-size: 0.7em;
    :hover {
        transform: scale(1.1);
        transition: transform ease 0.2s;
    }
}
#title {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h3 {
    font-weight: 200;
    font-size: 1.6em;
    padding: 0;
    margin: 10px 0;
}
h4 {
    font-weight: 400;
    font-size: 1.2em;
    margin: 5px 0;
}
p, h4, h3 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#content {
    margin: 20px 0 0 0;
    border-top: 1px solid rgba(255,255,255,.3);
    border-bottom: 1px solid rgba(255,255,255,.6);
}
`

export default class EventInfoBar extends Component {

    render() {

        return (
            <StyledDiv>
                <div id='title'>
                <h2>Information</h2>
                <Link to={`/events/${this.props.params.eventId}/edit`}>Edit</Link>
                </div>
                <div id='content'>
                    <h3>Date: {this.props.date}</h3>
                    {this.props.host ?
                        <div>
                            <h3>Hosted by {this.props.host}</h3>
                        </div> :
                        null}
                    {this.props.about ?
                        <div>
                            <h4>About this Movie Night</h4>
                            <p>{this.props.about}</p>
                        </div> :
                        null}
                </div>
            </StyledDiv>
        )
    }
}
