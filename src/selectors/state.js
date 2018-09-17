
export const productIdsSelector = state => state.products.allIds;
export const productSelector = state => state.products.byId;
export const categoryFilterSelector = state => state.filter.categoryFilter;
export const productSearchFilterSelector = state => state.filter.productSearchFilter;
export const orderSearchFilterSelector = state => state.filter.orderSearchFilter;
export const filterOrderSelector = state => state.filter.order;
export const paginationSelector = state => state.pagination;
export const currentOrderSelector = state => state.orders.currentOrder;
export const orderSelector = state => state.orders.byId;
export const orderIdsSelector = state => state.orders.allIds;
export const propsSelector = (state, props) => props;



