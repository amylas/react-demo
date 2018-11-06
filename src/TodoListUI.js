import React from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件
const TodoListUI = (props) => {
	return (
		<div style={{ padding: '20px' }}>
			<div>
				<Input value={props.inputValue} placeholder="Basic usage" style={{ width: '300px', marginRight: '20px' }} onChange={props.handleInput} />
				<Button type="primary" onClick={props.handleClick}>提交</Button>
			</div>
			<div style={{ width: '300px', marginTop: '20px' }}>
				<List
					bordered
					dataSource={props.list}
					renderItem={(item, index) => (<List.Item onClick={() => { props.handleDelete(index) }}>{item}</List.Item>)}
				/>
			</div>
		</div>
	)
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ padding: '20px' }}>
// 				<div>
// 					<Input value={this.props.inputValue} placeholder="Basic usage" style={{ width: '300px', marginRight: '20px' }} onChange={this.props.handleInput} />
// 					<Button type="primary" onClick={this.props.handleClick}>提交</Button>
// 				</div>
// 				<div style={{ width: '300px', marginTop: '20px' }}>
// 					<List
// 						bordered
// 						dataSource={this.props.list}
// 						renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleDelete(index)}}>{item}</List.Item>)}
// 					/>
// 				</div>
// 			</div>
//         )
//     }
// }

export default TodoListUI