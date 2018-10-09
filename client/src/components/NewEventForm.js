import React, { Component } from 'react'

export default class NewEventForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.props.handleSubmit(event)} >
            <input 
            placeholder='Event Name'
            type='text'
            name='name'
            value={this.props.newEvent.name}
            onChange={this.props.handleChange}
            />

            <input 
            placeholder='Host Name'
            type='text'
            name='host'
            value={this.props.newEvent.host}
            onChange={(event) => this.props.handleChange(event)}
            />

            <input 
            placeholder='Date'
            type='text'
            name='date'
            value={this.props.newEvent.date}
            onChange={(event) => this.props.handleChange(event)}
            />

            <input 
            placeholder='Event Description'
            type='text'
            name='about'
            value={this.props.newEvent.about}
            onChange={(event) => this.props.handleChange(event)}
            />

            <input type='submit' value='Create' />
        </form>
      </div>
    )
  }
}
