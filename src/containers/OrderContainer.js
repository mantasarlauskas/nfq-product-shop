import { connect } from 'react-redux';
import { removeOrder } from '../actions/orders';
import { resetPagination, isPageEmpty } from '../actions/pagination';
import Order from '../components/Order';
import { totalOrderPriceSelector } from '../selectors/orders';

const mapStateToProps = (state, { index }) => ({
  ...state.orders.byId[index],
  totalPrice: totalOrderPriceSelector(state, index),
  orderSearchFilter: state.filter.orderSearchFilter
});

const mapDispatchToProps = (dispatch, { selector }) => ({
  onRemove: (id) => {
    dispatch(removeOrder(id));
    dispatch(isPageEmpty(selector))
  },
  onChange: () => dispatch(resetPagination()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);