import { connect } from 'react-redux';
import OrderInfo from '../components/OrderInfo';
import { totalOrderPriceSelector, orderProductIdsSelector, orderPaginationFilterSelector } from '../selectors/orders';

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  idsLength: orderProductIdsSelector(state, id).length,
  totalPrice: totalOrderPriceSelector(state, id),
  filteredIds: orderPaginationFilterSelector(state, id),
  products: state.products.byId,
  orders: state.orders.byId,
  selectorFunction: orderPaginationFilterSelector
});

export default connect(mapStateToProps)(OrderInfo);