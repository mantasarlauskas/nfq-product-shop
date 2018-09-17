import C from '../constants';

export const setEditId = id => ({
  type: C.SET_EDIT_ID,
  payload: id
});

export const clearEditId = () => ({
  type: C.CLEAR_EDIT_ID
});