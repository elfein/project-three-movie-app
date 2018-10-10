import React, { Component } from 'react'

export default class NewUserForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleUserSubmit} >
                <input
                    placeholder='Your Name'
                    type='text'
                    name='name'
                    value={this.props.currentUser.name}
                    onChange={this.props.handleUserChange}
                />

                <input
                    placeholder='Image Address (Optional)'
                    type='text'
                    name='name'
                    value={this.props.currentUser.image}
                    onChange={this.props.handleUserChange}
                />

                <span>Your pic: </span><img style={{width: 60 + 'px'}} src={this.props.currentUser.image} alt='Your Pic' />

                <input type='submit' value='Attend' />
            </form>
        )
    }
}
