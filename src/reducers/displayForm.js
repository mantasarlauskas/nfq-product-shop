import C from '../constants';

const initialState = {
  productForm: false,
  categoryForm: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case C.TOGGLE_PRODUCT_FORM:
      return {
        ...state,
        productForm: !state.productForm
      }
    case C.TOGGLE_CATEGORY_FORM:
      return {
        ...state,
        categoryForm: !state.categoryForm
      }
    case C.SHOW_PRODUCT_FORM:
      return {
        ...state,
        productForm: true
      }
    case C.CLOSE_FORMS:
      return initialState
    default:
      return state
  }
};