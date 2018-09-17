import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Form from '../components/Form';
import { batchActions } from 'redux-batched-actions';
import { addProduct } from '../actions/products';
import { toggleProductForm } from '../actions/displayForm';

const mapStateToProps = ({ categories, editing, products }, { name }) => ({
  form: name,
  options: categories.byId,
  optionIds: categories.allIds,
  productIds: products.allIds,
  editing
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (fields) => dispatch(batchActions([addProduct(fields), toggleProductForm()]))
});

const mergeProps = ({ productIds, ...stateProps }, { onSubmit }, ownProps) => ({
  ...ownProps,
  ...stateProps,
  onSubmit: (fields) => onSubmit({ ...fields, id: productIds.length > 0 ? productIds[productIds.length - 1] + 1 : 0 })
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  reduxForm()
)(Form);