import { connect } from 'react-redux';
import OrderInfo from '../components/OrderInfo';
import { totalOrderPriceSelector, orderProductIdsSelector, orderPaginationFilterSelector } from '../selectors/orders';
import { addOrder } from '../actions/orders';

const mapStateToProps = state => ({
  idsLength: orderProductIdsSelector(state).length,
  totalPrice: totalOrderPriceSelector(state),
  filteredIds: orderPaginationFilterSelector(state),
  products: state.products.byId,
  orderIds: state.orders.allIds,
  currentOrder: state.orders.currentOrder,
  selectorFunction: orderPaginationFilterSelector
});

const mapDispatchToProps = dispatch => ({
  onAdd: (order) => dispatch(addOrder(order))
});

const mergeProps = ({ orderIds, currentOrder, totalPrice, ...stateProps }, { onAdd, ...dispatchProps }, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  totalPrice,
  onAdd: () => onAdd({
    id: orderIds.length > 0 ? orderIds[orderIds.length - 1] + 1 : 0,
    date: new Date(),
    totalPrice,
    products: currentOrder
  })
}); 

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(OrderInfo);