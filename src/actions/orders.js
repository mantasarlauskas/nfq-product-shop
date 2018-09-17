import C from '../constants';

export const addProductToOrder = id => ({
  type: C.ADD_PRODUCT_TO_ORDER,
  payload: id
});

export const removeProductFromOrder = id => ({
  type: C.REMOVE_PRODUCT_FROM_ORDER,
  payload: id
});

export const removeProductsFromOrders = id => ({
  type: C.REMOVE_PRODUCTS_FROM_ORDERS,
  payload: id
});

export const addOrder = order => ({
  type: C.ADD_ORDER,
  payload: order
});

export const removeOrder = id => ({
  type: C.REMOVE_ORDER,
  payload: id
});

export const removeEmptyOrders = () => (dispatch, getState) => {
  const { orders } = getState();
  orders.allIds.forEach(id => orders.byId[id].products.length === 0 && dispatch(removeOrder(id)));
};