import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Form from '../components/Form';
import { batchActions } from 'redux-batched-actions';
import { addCategory } from '../actions/categories';
import { toggleCategoryForm } from '../actions/displayForm';

const mapStateToProps = ({ categories: { allIds } }, { name }) => ({
  form: name,
  categoryIds: allIds
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (fields) => dispatch(batchActions([addCategory(fields), toggleCategoryForm()]))
});

const mergeProps = ({ categoryIds, ...stateProps }, { onSubmit }, ownProps) => ({
  ...ownProps,
  ...stateProps,
  onSubmit: (fields) => onSubmit({ ...fields, id: categoryIds.length > 0 ? categoryIds[categoryIds.length - 1] + 1 : 0 })
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  reduxForm()
)(Form);