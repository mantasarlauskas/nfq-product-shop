import { connect } from 'react-redux';
import { toggleProductForm, toggleCategoryForm } from '../actions/displayForm';
import { clearEditId } from '../actions/editing';
import { totalProductSelector, searchProductSelector, visibleProductSelector } from '../selectors/products';
import { batchActions } from 'redux-batched-actions';
import App from '../components/App';

const mapStateToProps = state => ({
  products: state.products.byId,
  productIds: totalProductSelector(state),
  productsLength: state.products.allIds.length,
  filteredProductsLength: visibleProductSelector(state).length,
  searchProductsLength: searchProductSelector(state).length,
  editing: state.editing,
  selectorFunction: totalProductSelector,
  ...state.displayForm
});

const mapDispatchToProps = dispatch => ({
  onToggleProductForm: () => dispatch(batchActions([toggleProductForm(), clearEditId()])),
  onToggleCategoryForm: () => dispatch(toggleCategoryForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);