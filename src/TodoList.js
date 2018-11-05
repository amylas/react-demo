import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
      show: true
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  shouldComponentUpdate() {
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="name">username</label>
          <input className="input" id="name" type="text" value={this.state.inputValue} onChange={this.handleInput} />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
        { this.getTodoItems() }
        </ul>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle.bind(this)}>toggle</button>
      </Fragment>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  getTodoItems() {
    return this.state.list.map((item, index) => {
      return  <TodoItem content={item} index={index} key={item} deleteItem={this.handleDelete} />
    })
  }

  handleToggle() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

  handleInput(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleClick() {
    this.setState((preState) => ({
      inputValue: '',
      list: [...preState.list, preState.inputValue]
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
  }

  handleDelete(index) {
    this.setState((preState) => {
      const list = [...preState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList