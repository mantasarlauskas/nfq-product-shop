import React from 'react';
import Pagination from '../containers/PaginationContainer';
import OrderFilterForm from '../containers/OrderFilter';
import Menu from '../containers/MenuContainer';
import Order from '../containers/OrderContainer';
import SearchForm from '../containers/OrderSearchForm';
import { orderFields } from '../formFields';

const validateContent = (searchOrdersLength, ordersLength) => (
  ordersLength === 0 ? <div className="mt-3">Užsakymų sąrašas yra tuščias</div> :
    searchOrdersLength === 0 ? <div className="mt-3">Paieškos raktą tenkinančių užsakymų nėra</div> : 
    <Pagination itemsLength={searchOrdersLength} />
);

export default ({ filteredIds, selectorFunction, searchOrdersLength, ordersLength }) => (
  <div className="app">
    <Menu />
    <div className="app-container">
      <div className="container-fluid mt-3 p-0">
        <div className="row mx-0">
          <OrderFilterForm itemIds={orderFields.allIds} items={orderFields.byId} title={"Rikiavimas"} />
          <SearchForm placeholder={"Įveskite datą arba numerį"} />
        </div>
      </div>
      { ordersLength > 0 && filteredIds.map(index => <Order key={index} index={index} selector={selectorFunction} />) }
      { validateContent(searchOrdersLength, ordersLength) }
    </div>
  </div>
);

