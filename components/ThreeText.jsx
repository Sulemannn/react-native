import React, { Component } from 'react'

export default class ThreeText extends Component {

    constructor() {
        super()

    }

    render() {
        return (
            <Text>{this.props.children}</Text>
        )
    }
}
