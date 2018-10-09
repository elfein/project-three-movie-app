import React, { Component } from 'react'



export default class SuggestionItem extends Component {
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
                <h4>Votes: {this.props.suggestion.supporters.length}</h4>
                <ul>{supporterList}</ul>
                <button>Vote</button>
            </div>
        )
    }
}
