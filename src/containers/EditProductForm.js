import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Form from '../components/Form';
import { batchActions } from 'redux-batched-actions';
import { editProduct } from '../actions/products';
import { clearEditId } from '../actions/editing';
import { toggleProductForm } from '../actions/displayForm';

const mapStateToProps = ({ categories, editing, products }, { name }) => ({
  form: name,
  options: categories.byId,
  optionIds: categories.allIds,
  products: products.byId,
  editing
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (fields) => dispatch(batchActions([editProduct(fields), clearEditId(), toggleProductForm()]))
});

const mergeProps = ({ editing, products, ...stateProps }, { onSubmit }, ownProps) => ({
  ...ownProps,
  editing,
  ...stateProps,
  onSubmit: (fields) => onSubmit({ ...fields, id: editing, logo: products[editing].logo })
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  reduxForm()
)(Form);