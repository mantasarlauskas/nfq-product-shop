import C from '../constants';
import omit from 'lodash.omit';

const initialState = {
  currentOrder: [],
  byId: {},
  allIds: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case C.ADD_ORDER:
      return {
        currentOrder: initialState.currentOrder,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        },
        allIds: [
          ...state.allIds,
          action.payload.id
        ]
      }
    case C.REMOVE_ORDER:
      return {
        ...state,
        byId: omit(state.byId, action.payload),
        allIds: state.allIds.filter(id => id !== action.payload)
      }
    case C.ADD_PRODUCT_TO_ORDER:
      return {
        ...state,
        currentOrder: [
          ...state.currentOrder,
          action.payload
        ]
      }
    case C.REMOVE_PRODUCT_FROM_ORDER: 
      return {
        ...state,
        currentOrder: state.currentOrder.filter((x, index) => index !== action.payload)
      }
    case C.REMOVE_PRODUCTS_FROM_ORDERS:
      const orders = {};
      state.allIds.forEach(id => orders[id] = {
        ...state.byId[id],
        products: state.byId[id].products.filter(id => id !== action.payload)
      });
      return {
        ...state,
        byId: orders,
        currentOrder: state.currentOrder.filter(id => id !== action.payload)
      }
    default: 
      return state
  }
};