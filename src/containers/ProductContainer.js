import { connect } from 'react-redux';
import { removeProduct, decrementProductCount, incrementProductCount } from '../actions/products';
import { addProductToOrder, removeProductFromOrder, removeProductsFromOrders, removeEmptyOrders } from '../actions/orders';
import { setEditId } from '../actions/editing';
import { showProductForm } from '../actions/displayForm';
import { isPageEmpty } from '../actions/pagination';
import { change } from 'redux-form';
import { batchActions } from 'redux-batched-actions';
import Product from '../components/Product';
import { productFields } from '../formFields';

const mapStateToProps = ({ editing, categories: { byId }, filter: { productSearchFilter } }, { product: { category } }) => ({
  editing,
  logo: byId[category].logo,
  productSearchFilter
});

const mapDispatchToProps = (dispatch, { product: { id }, orderIndex, product, selector, orderId }) => ({
  onAddToOrder: () => dispatch(batchActions([addProductToOrder(id), decrementProductCount(id)])),
  onRemoveFromOrder: () => {
    dispatch(batchActions([removeProductFromOrder(orderIndex), incrementProductCount(id)]));
    dispatch(isPageEmpty(selector, orderId));
  },
  onRemove: () => {
    dispatch(batchActions([removeProduct(id), removeProductsFromOrders(id)]));
    dispatch(isPageEmpty(selector));
    dispatch(removeEmptyOrders()); 
  },
  onEdit: () => {
    dispatch(batchActions([setEditId(id), showProductForm(), 
    productFields.map(field => dispatch(change("editProductForm", field.id, product[field.id])))]));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);