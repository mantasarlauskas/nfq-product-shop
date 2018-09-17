import C from '../constants';

const initialState = {
  categoryFilter: -1,
  productSearchFilter: '',
  order: 0,
  orderSearchFilter: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case C.CHANGE_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload
      }
    case C.CHANGE_PRODUCT_SEARCH_FILTER:
      return {
        ...state,
        productSearchFilter: action.payload
      }
    case C.CHANGE_ORDER_SEARCH_FILTER:
      return {
        ...state,
        orderSearchFilter: action.payload
      }
    case C.CHANGE_ORDER:
      return {
        ...state,
        order: action.payload
      }
    case C.RESET_FILTERS:
      return initialState
    default:
      return state
  }
};