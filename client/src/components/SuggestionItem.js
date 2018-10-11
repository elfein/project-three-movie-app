import React, { Component } from 'react'
import NewUserForm from './NewUserForm';
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
padding: 20px;
#movie-info {
    margin: 0 15px;
}
h3, h4 {
    margin: 0;
}
h6 {
    margin: 10px 0;
}
ul {
    padding: 0;
    margin: 8px 0;
}
li {
    display: inline;
    margin: 0 8px 0 0;
}
`

export default class SuggestionItem extends Component {
    state = {
        showAlreadyVoted: false,
        showUserForm: false,
    }

    checkUser = (event) => {
        if (this.props.currentUser.name === '') {
            this.toggleShowForm()
        } else {
            if (!this.props.suggestion.supporters.find((voter) => voter.name === this.props.currentUser.name)) {
                this.props.handleUserSubmit(event, this.props.suggestion._id)
            } else {
                this.setState({ showAlreadyVoted: true })
                setTimeout(() => {this.setState({ showAlreadyVoted: false })}, 2000)
            }
        }
    }

    toggleShowForm = () => {
        this.setState({ showUserForm: !this.state.showUserForm })
    }

    render() {
        const supporterList = this.props.suggestion.supporters.map((supporter, i) => {
            return <li key={i} >{supporter.name}</li>
        })

        return (
            <StyledDiv>
                <img height='100px' src={this.props.suggestion.img} alt='movie pic' />
                <div id='movie-info'>
                <h3>{this.props.suggestion.name}</h3>

                {this.props.editMode ?
                    <span><button onClick={() => this.props.handleDelete(this.props.suggestion._id)}>Delete</button></span> :
                    null}

                <h6>Genre: {this.props.suggestion.genre}</h6>

                <h4>Votes: {this.props.suggestion.supporters.length}</h4>

                <ul>{supporterList}</ul>

                {this.state.showUserForm ?
                    <div>
                        <button onClick={this.toggleShowForm}>Cancel</button>
                        <p>You need to attend this event in order to vote!</p>
                        <p>Join the list of attendees:</p>
                        <NewUserForm
                            toggleShowForm={this.toggleShowForm}
                            suggestion={this.props.suggestion}
                            handleUserChange={this.props.handleUserChange}
                            handleUserSubmit={this.props.handleUserSubmit}
                            currentUser={this.props.currentUser} />
                    </div> :
                    <button onClick={this.checkUser}>Vote</button>}
                    {this.state.showAlreadyVoted ?  
                    <p>You've already voted for this movie!</p> :
                    null }</div>
            </StyledDiv>
        )
    }
}
