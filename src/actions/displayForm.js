import C from '../constants';

export const toggleProductForm = () => ({
  type: C.TOGGLE_PRODUCT_FORM
});

export const toggleCategoryForm = () => ({
  type: C.TOGGLE_CATEGORY_FORM
});

export const showProductForm = () => ({
  type: C.SHOW_PRODUCT_FORM
});

export const closeForms = () => ({
  type: C.CLOSE_FORMS
});