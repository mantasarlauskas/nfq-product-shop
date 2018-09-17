import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { changeCategoryFilter } from '../actions/filter';
import { resetPagination } from '../actions/pagination';
import { batchActions } from 'redux-batched-actions';

const mapStateToProps = ({ categories: { byId, allIds } }) => ({
  items: byId,
  itemIds: allIds
});

const mapDispatchToProps = dispatch => ({
  onFilter: (filter) => dispatch(batchActions([changeCategoryFilter(parseInt(filter, 10)), resetPagination()]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);