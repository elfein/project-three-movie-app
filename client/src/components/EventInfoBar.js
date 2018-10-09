import React, { Component } from 'react'

export default class EventInfoBar extends Component {

    render() {

        return (
            <div>
                <h3>{this.props.date}</h3>
                {this.props.about ?
                    <p>{this.props.about}</p> :
                    null}

                {this.props.suggestions}
            </div>
        )
    }
}
