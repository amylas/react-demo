import React, { Component } from 'react'

import TodoListUI from './TodoListUI'
import { getInitActionList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'
import store from './store'
import 'antd/dist/antd.css'


class TodoList1 extends Component {

	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleInput = this.handleInput.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)

		store.subscribe(this.handleStoreChange)
	}

	render() {
		return <TodoListUI 
					inputValue={this.state.inputValue}
					list={this.state.list}
					handleClick={this.handleClick}
					handleInput={this.handleInput}
					handleDelete={this.handleDelete}
				/>
	}

	componentDidMount() {
		const action = getInitActionList()
		// 会自动执行action这个函数，并传入dispatch
		store.dispatch(action)
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