import dataGenerator from './dataGenerator';
import C from './constants';

const categoryCount = 50;
const productCount = 50;
const orderCount = 50;

export default store  => {
  dataGenerator(store, C.ADD_CATEGORY, categoryCount);
  dataGenerator(store, C.ADD_PRODUCT, productCount, categoryCount);
  dataGenerator(store, C.ADD_ORDER, orderCount, productCount);    
};