import React, { Component } from 'react'

export default class EditEventForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event)} >
                    <input
                        placeholder='Event Name'
                        type='text'
                        name='name'
                        value={this.props.event.name}
                        onChange={this.props.handleChange}
                    />

                    <input
                        placeholder='Host Name'
                        type='text'
                        name='host'
                        value={this.props.event.host}
                        onChange={this.props.handleChange}
                    />

                    <input
                        placeholder='Date'
                        type='text'
                        name='date'
                        value={this.props.event.date}
                        onChange={this.props.handleChange}
                    />

                    <input
                        placeholder='Event Description'
                        type='text'
                        name='about'
                        value={this.props.event.about}
                        onChange={this.props.handleChange}
                    />

                    <input type='submit' value='Update Event' />
                </form>
            </div>
        )
    }
}
