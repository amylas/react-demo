import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate() {
        return false
    }

    componentWillReceiveProps() {
        // console.log('componentWillReceiveProps')
    }

    render() {
        console.log('child render')
        const { content, index } = this.props
        return <div dangerouslySetInnerHTML={{ __html: content }} key={index} onClick={this.handleClick}></div>
    }

    handleClick() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount')
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem