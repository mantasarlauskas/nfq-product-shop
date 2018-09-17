import { createSelector } from 'reselect';
import dateformat from 'dateformat';
import sortBy from 'lodash.sortby';
import { orderIdsSelector, orderSelector, filterOrderSelector, orderSearchFilterSelector,
  paginationSelector, currentOrderSelector, propsSelector, productSelector } from './state';

const sortOrderSelector = createSelector(
  [orderIdsSelector, orderSelector, filterOrderSelector],
  (orderIds, orders, filterOrder) => filterOrder === 0 ? sortBy(orderIds, [id => orders[id].date]).reverse() :
  sortBy(orderIds, [id => orders[id].date])
);

export const searchOrderSelector = createSelector(
  [sortOrderSelector, orderSelector, orderSearchFilterSelector],
  (orderIds, orders, filter) => orderIds.filter(index => ("Užsakymas numeris " + orders[index].id)
  .toUpperCase().includes(filter.toUpperCase()) || dateformat(orders[index].date, 'yyyy/mm/dd HH:MM').includes(filter))
);

export const ordersPaginationFilterSelector = createSelector(
  [searchOrderSelector, paginationSelector],
  (ids, pagination) => ids.length > pagination.itemsPerPage ?
  ids.filter((x, index) => index >= pagination.begin && index < pagination.end) : pagination.pageNumber === 0 ? ids : []
);

export const orderProductIdsSelector = createSelector(
  [currentOrderSelector, orderSelector, propsSelector],
  (currentOrder, ids, id) => id === undefined ? currentOrder : ids[id] ? ids[id].products : []
);

export const totalOrderPriceSelector = createSelector(
  [orderProductIdsSelector, productSelector],
  (ids, products) => {
      let sum = 0;
      ids.forEach(id => sum = parseFloat((sum + products[id].price).toFixed(2)));
      return sum;
  }
);

export const orderPaginationFilterSelector = createSelector(
  [orderProductIdsSelector, paginationSelector],
  (ids, pagination) =>  ids.length > pagination.itemsPerPage ?
  ids.filter((x, index) => index >= pagination.begin && index < pagination.end) : pagination.pageNumber === 0 ? ids : []
);