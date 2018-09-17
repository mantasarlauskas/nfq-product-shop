import React from 'react';
import Menu from '../containers/MenuContainer';
import Product from '../containers/ProductContainer';
import Pagination from '../containers/PaginationContainer';

const displayButton = onAdd => (
  <div className="clearfix">
    <button className="btn btn-primary float-right" onClick={onAdd}>
      Patvirtinti užsakymą
    </button>
  </div>
);

const displayContent = (idsLength, filteredIds, totalPrice, products, params, selectorFunction, onAdd) => (
  <div className="app-container">
    { params.id === undefined && displayButton(onAdd) }
    Bendra užsakymo suma: <h5>${ totalPrice }</h5>
    { filteredIds.map((id, index) => 
        <Product 
          key={index} 
          product={products[id]} 
          orderIndex={index} 
          orderId={params.id} 
          selector={selectorFunction} 
        />
      ) 
    }
    <Pagination itemsLength={idsLength}/>
  </div>
);

const displayInfo = (orders, { id }) => (
  <div className="app-container mt-3">
    { id !== undefined && !orders[id] ? "Toks užsakymas neegzistuoja" : "Į dabartinį užsakymą prekių dar nėra įtraukta" }
  </div>
);

export default ({ idsLength, filteredIds, totalPrice, products, match: { params }, selectorFunction, onAdd, orders, id }) => (
  <div className="app">
    <Menu />
    { idsLength > 0 ? 
        displayContent(idsLength, filteredIds, totalPrice, products, params, selectorFunction, onAdd) : 
        displayInfo(orders, params) 
    }  
  </div>
);