import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

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