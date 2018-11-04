import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'


class TodoList1 extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <div>
                    <Input placeholder="Basic usage" style={{ width: '300px', marginRight: '20px' }} />
                    <Button type="primary">提交</Button>
                </div>
                <div style={{width: '300px', marginTop: '20px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList1