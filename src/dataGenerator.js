import faker from 'faker';
import { addProduct } from './actions/products';
import { addCategory } from './actions/categories';
import { addOrder } from './actions/orders';
import C from './constants';

const productGenerator = (store, i, categoryCount) => {
  store.dispatch(addProduct({
    id: i,
    name: faker.company.companyName(),
    description: faker.lorem.sentence(),
    category: Math.floor(Math.random() * categoryCount),
    count: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
    price: Math.round((Math.random() * (200 - 2) + 2) * 100) / 100
  }));
};

const categoryGenerator = (store, i) => {
  store.dispatch(addCategory({
    id: i,
    logo: faker.image.avatar(),
    name: faker.lorem.word()
  }));
};

const orderGenerator = (store, i, productCount) => {
  const randomLength = Math.floor(Math.random() * 10) + 1;
  store.dispatch(addOrder({
    id: i,
    date: faker.date.past(),
    products: Array.from({ length: randomLength }, () => Math.floor(Math.random() * productCount))
  }));
};

export default (store, action, itemCount, otherCount) => {
  let i = 0;
  while(i < itemCount) {
    switch(action) {
      case C.ADD_PRODUCT:
        productGenerator(store, i, otherCount);
        break;
      case C.ADD_ORDER:
        orderGenerator(store, i, otherCount);
        break;
      case C.ADD_CATEGORY:
        categoryGenerator(store, i);
        break;
      default:
        break;
    }
    i++;
  };
};


