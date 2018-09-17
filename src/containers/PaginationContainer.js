import { connect } from 'react-redux';
import { changePage } from '../actions/pagination';
import Pagination from '../components/Pagination';

const mapStateToProps = ({ pagination: { itemsPerPage, pageNumber }}) => ({
  itemsPerPage,
  pageNumber
});

const mapDispatchToProps = dispatch => ({
  onPageChange: (page) => dispatch(changePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);