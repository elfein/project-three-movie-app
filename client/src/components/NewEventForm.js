import React, { Component } from 'react'
import styled from 'styled-components'

const StyledOverlay = styled.div`
#modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250,250,255,0.5);
  display: flex;
  opacity: 1;
  transition: opacity .2s;
  &.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
}
}
`

const StyledDiv = styled.div`
position: fixed;
top: 50%;
left: 50%;
transition: transform 0.2s ease, opacity 0.2s ease;
opacity: 100%;
z-index: 1010;
padding: 30px;
background: rgb(30,90,120);
transform: scale(1.0) translate(-50%, -50%);
&.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
}
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-content: center;
p {
  font-size: 0.2em;
  margin: 15px 0 5px 0;
}
[type~=submit] {
  margin: 20px;
}
`

export default class NewEventForm extends Component {
  render() {
    return (
      <StyledOverlay>
        <StyledDiv className={this.props.showNewForm ? '' : "hidden"}>
          <button onClick={this.props.clickHandler}>Cancel</button>
          <StyledForm onSubmit={this.props.handleSubmit} >
            <p>Event Name</p>
            <input
              placeholder='Event Name'
              type='text'
              name='name'
              value={this.props.newEvent.name}
              onChange={this.props.handleChange}
            />

            <p>Host Name</p>
            <input
              placeholder='Host Name'
              type='text'
              name='host'
              value={this.props.newEvent.host}
              onChange={(event) => this.props.handleChange(event)}
            />

            <p>Date</p>
            <input
              placeholder='Date'
              type='text'
              name='date'
              value={this.props.newEvent.date}
              onChange={(event) => this.props.handleChange(event)}
            />

            <p>Event Description</p>
            <input
              placeholder='Event Description'
              type='text'
              name='about'
              value={this.props.newEvent.about}
              onChange={(event) => this.props.handleChange(event)}
            />

            <input type='submit' value='Create' />
          </StyledForm>
        </StyledDiv>
        <div id='modal-overlay' 
        onClick={this.props.clickHandler}
        className={this.props.showNewForm ? '' : "hidden"}></div>
      </StyledOverlay>
    )
  }
}
