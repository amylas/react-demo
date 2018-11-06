import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'
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
						renderItem={(item, index) => (<List.Item onClick={this.handleDelete.bind(this, index)}>{item}</List.Item>)}
					/>
				</div>
			</div>
		)
	}

	handleInput(e) {
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}

	handleStoreChange() {
		this.setState(store.getState())
	}

	handleClick() {
		const action = getAddItemAction(this.state.inputValue)
		store.dispatch(action)
	}

	handleDelete(index) {
		const action = getDeleteItemAction(index)
		store.dispatch(action)
	}
}

export default TodoList1