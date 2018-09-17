import { createSelector } from 'reselect';
import { productIdsSelector, productSelector, categoryFilterSelector, productSearchFilterSelector, paginationSelector } from './state';

export const visibleProductSelector = createSelector(
  [productIdsSelector, productSelector, categoryFilterSelector],
  (productIds, products, filter) => filter === -1 ? productIds : productIds.filter(id => products[id].category === filter)
);

export const searchProductSelector = createSelector(
  [visibleProductSelector, productSelector, productSearchFilterSelector],
  (productIds, products, filter) => productIds.filter(index => products[index].name.toUpperCase().includes(filter.toUpperCase()))
);

export const totalProductSelector = createSelector(
  [searchProductSelector, paginationSelector],
  (productIds, pagination) => productIds.length > pagination.itemsPerPage ?
  productIds.filter((x, index) => index >= pagination.begin && index < pagination.end) : pagination.pageNumber === 0 ? productIds : []
);