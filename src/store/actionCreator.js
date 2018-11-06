import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    value,
    type: CHANGE_INPUT_VALUE
})

export const getAddItemAction = (value) => ({
    value,
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    index,
    type: DELETE_TODO_ITEM
})

export const initListAction = (data) => ({
    data,
    type: INIT_LIST_ACTION
})

// export const getInitActionList = () => {
//     return (dispatch) => {
//         axios.get('/xxxx').then(res => {
//             const data = res.data
//             const action = initListAction(data)
//             dispatch(action)
//         })
//     }
// }