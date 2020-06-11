import * as types from '../constants/ActionTypes';

export const addRss = (name, url) => ({ type: types.ADD_RSS, name, url })
export const deleteRss = id => ({ type: types.DELETE_RSS, id })
export const editRss = (id, name, url) => ({ type: types.EDIT_RSS, id, name, url })