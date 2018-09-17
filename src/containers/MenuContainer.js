import { connect } from 'react-redux';
import { resetPagination } from '../actions/pagination';
import { closeForms } from '../actions/displayForm';
import { resetFilters } from '../actions/filter';
import Menu from '../components/Menu';
import { batchActions } from 'redux-batched-actions';

const mapStateToProps = ({ orders: { currentOrder }}) => ({
  currentOrderLength: currentOrder.length
});

const mapDispatchToProps = dispatch => ({
  onChange: () => dispatch(batchActions([resetPagination(), resetFilters(), closeForms()]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
