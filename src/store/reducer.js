const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        console.log(newState)
        return newState
    } else if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state))
        // newState.list = [...state.list, action.value]
        newState.list.push(action.value)
        newState.inputValue = ''
        return newState
    }
    return state
}