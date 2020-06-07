import { ADD_ITEM, SUB_ITEM, REMOVE_ITEM, SHOW_MODAL, HIDE_MODAL } from './actionTypes';
export const addItem = id => ({
    type: ADD_ITEM,
    id: id,
})
export const subItem = id => ({
    type: SUB_ITEM,
    id: id
})
export const removeItem = id => ({
    type: REMOVE_ITEM,
    id: id
})
export const showModal = (data) => ({
    type: SHOW_MODAL,
    data: data
})
export const hideModal = () => ({
    type: HIDE_MODAL,
})