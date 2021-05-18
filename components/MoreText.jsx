import React, { Component } from 'react'

export default class MoreText extends Component {

    constructor() {
        super()

    }

    render() {
        return (

            <Text>{this.props.children}</Text>

        )
    }
}
