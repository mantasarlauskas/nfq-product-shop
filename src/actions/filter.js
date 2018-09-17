import C from '../constants';

export const changeCategoryFilter = filter => ({
  type: C.CHANGE_CATEGORY_FILTER,
  payload: filter
});

export const changeProductSearchFilter = filter => ({
  type: C.CHANGE_PRODUCT_SEARCH_FILTER,
  payload: filter
});

export const changeOrderSearchFilter = filter => ({
  type: C.CHANGE_ORDER_SEARCH_FILTER,
  payload: filter
});

export const changeOrder = order => ({
  type: C.CHANGE_ORDER,
  payload: order
});

export const resetFilters = () => ({
  type: C.RESET_FILTERS
});