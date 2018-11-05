import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'


class TodoList1 extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInput = this.handleInput.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <div>
                    <Input value={this.state.inputValue} placeholder="Basic usage" style={{ width: '300px', marginRight: '20px' }} onChange={this.handleInput} />
                    <Button type="primary" onClick={this.handleClick}>提交</Button>
                </div>
                <div style={{ width: '300px', marginTop: '20px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }

    handleInput(e) {
        store.dispatch({
            type: 'change_input_value',
            value: e.target.value
        })
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleClick() {
        store.dispatch({
            type: 'add_todo_item',
            value: this.state.inputValue
        })
    }
}

export default TodoList1