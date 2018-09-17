import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { resetPagination } from '../actions/pagination';
import { changeOrder } from '../actions/filter';
import { batchActions } from 'redux-batched-actions';

const mapDispatchToProps = dispatch => ({
  onFilter: (order) => dispatch(batchActions([changeOrder(parseInt(order, 10)), resetPagination()]))
});

export default connect(null, mapDispatchToProps)(Filter);