import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
max-width: 300px;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
#form-parts {
    display: flex;
    p {
        margin: 0 0 10px 0;
    }
}
#pic {
    margin: 0 0 0 14px;
}
img {
    width: 56px;
}
input {
    width: 200px;
    display: block;
    margin: 0 0 18px 0; 
}
[type~=submit] {
    width: 60px;
}
`

export default class NewUserForm extends Component {

    doSubmit = (event, movieId) => {
        if (this.props.currentUser.name !== "") {
            this.props.handleUserSubmit(event, movieId)
            this.props.toggleShowForm()
        } else {
            event.preventDefault()
            console.log('no name')
        }
    }

    render() {
        return (
            <StyledForm onSubmit={(event) => this.doSubmit(event, this.props.suggestion._id)} >
                <div id='form-parts'>
                    <div>
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
                    </div>
                    <div id='pic'>
                        <img src={this.props.currentUser.image} alt='Your Pic' />
                    </div>
                </div>
                <input type='submit' value='Attend' />
            </StyledForm>
        )
    }
}
