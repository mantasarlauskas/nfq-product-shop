import { connect } from 'react-redux';
import { changeProductSearchFilter } from '../actions/filter';
import { resetPagination } from '../actions/pagination';
import { batchActions } from 'redux-batched-actions';
import SearchForm from '../components/SearchForm';

const mapDispatchToProps = dispatch => ({
  onSearch: (filter) => dispatch(batchActions([changeProductSearchFilter(filter), resetPagination()]))
});

export default connect(null, mapDispatchToProps)(SearchForm);