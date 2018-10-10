import React, { Component } from 'react'

export default class NewUserForm extends Component {

    doSubmit = (event, movieId) => {
        this.props.handleUserSubmit(event, movieId)
        this.props.toggleShowForm()
    }

    render() {
        return (
            <form onSubmit={(event) => this.doSubmit(event, this.props.suggestion._id)} >
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
                    name='image'
                    onBlur={this.props.handleUserChange}
                />

                <span>Your pic: </span><img style={{width: 60 + 'px'}} src={this.props.currentUser.image} alt='Your Pic' />

                <input type='submit' value='Attend' />
            </form>
        )
    }
}
