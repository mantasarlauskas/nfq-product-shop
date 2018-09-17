import { connect } from 'react-redux';
import { resetPagination } from '../actions/pagination';
import { changeOrderSearchFilter } from '../actions/filter';
import { batchActions } from 'redux-batched-actions';
import SearchForm from '../components/SearchForm';

const mapDispatchToProps = dispatch => ({
  onSearch: (filter) => dispatch(batchActions([changeOrderSearchFilter(filter), resetPagination()]))
});

export default connect(null, mapDispatchToProps)(SearchForm);