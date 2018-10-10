import React, { Component } from 'react'
import NewUserForm from './NewUserForm';



export default class SuggestionItem extends Component {
    state = {
        showUserForm: false
    }

    checkUser = () => {
        if (this.props.currentUser.name === '') {
            this.setState({ showUserForm: true })
        }
    }

    render() {
        const supporterList = this.props.suggestion.supporters.map((supporter, i) => {
            return <li key={i} >{supporter.name}</li>
        })

        return (
            <div>
                <img height='100px' src={this.props.suggestion.img} alt='movie pic' />
                
                <h3>{this.props.suggestion.name}</h3>
                
                {this.props.editMode ? 
                <span><button onClick={() => this.props.handleDelete(this.props.suggestion._id)}>Delete</button></span> :
                null}

                <h6>Genre: {this.props.suggestion.genre}</h6>
                <h6>Runtime: {this.props.suggestion.minutes} minutes</h6>
                
                <h4>Votes: {this.props.suggestion.supporters.length}</h4>
                
                <ul>{supporterList}</ul>
                
                <button onClick={this.checkUser}>Vote</button>
                {this.state.showUserForm ? 
                <div>
                    <p>You need to attend this event in order to vote!</p>
                    <p>Join the list of attendees:</p>
                    <NewUserForm 
                    handleUserChange={this.props.handleUserChange}
                    handleUserSubmit={this.props.handleUserSubmit}
                    currentUser={this.props.currentUser} />
                </div> : 
                null }
            </div>
        )
    }
}
