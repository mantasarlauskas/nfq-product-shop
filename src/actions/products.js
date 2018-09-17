import C from '../constants';

export const addProduct = fields => ({
  type: C.ADD_PRODUCT,
  payload: fields
});

export const editProduct = fields => ({
  type: C.EDIT_PRODUCT,
  payload: fields
});

export const removeProduct = id => ({
  type: C.REMOVE_PRODUCT,
  payload: id
});

export const incrementProductCount = id => ({
  type: C.INCREMENT_PRODUCT_COUNT,
  payload: id
});

export const decrementProductCount = id => ({
  type: C.DECREMENT_PRODUCT_COUNT,
  payload: id
});