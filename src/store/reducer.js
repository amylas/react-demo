import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    let newState
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            console.log(newState)
            return newState
        case ADD_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.push(action.value)
            newState.inputValue = ''
            return newState
        case DELETE_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            return newState
        default:
            return state
    }
}