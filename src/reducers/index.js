import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import orders from './orders';
import filter from './filter';
import editing from './editing';
import displayForm from './displayForm';
import pagination from './pagination';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  products,
  categories,
  orders,
  pagination,
  displayForm,
  filter,
  editing,
  form: formReducer
});