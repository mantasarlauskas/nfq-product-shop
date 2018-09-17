import { connect } from 'react-redux';
import { ordersPaginationFilterSelector, searchOrderSelector } from '../selectors/orders';
import Orders from '../components/Orders';

const mapStateToProps = state => ({
  ordersLength: state.orders.allIds.length,
  searchOrdersLength: searchOrderSelector(state).length,
  filteredIds: ordersPaginationFilterSelector(state),
  selectorFunction: ordersPaginationFilterSelector
});

export default connect(mapStateToProps)(Orders);