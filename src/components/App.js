import React from 'react';
import Menu from '../containers/MenuContainer';
import Product from '../containers/ProductContainer';
import CategoryFilterForm from '../containers/CategoryFilter';
import SearchForm from '../containers/ProductSearchForm';
import Pagination from '../containers/PaginationContainer';
import AddProductForm from '../containers/AddProductForm';
import EditProductForm from '../containers/EditProductForm';
import AddCategoryForm from '../containers/AddCategoryForm';
import { productFields, categoryFields } from '../formFields';

const displayProductForm = editing => editing === null ? <AddProductForm name={"addProductForm"} fields={productFields} /> :
  <EditProductForm name={"editProductForm"} fields={productFields} />;

const displayContent = (productIds, products, selectorFunction, searchProductsLength) => (
  <div className="my-2">
    { productIds.map(id => <Product key={products[id].id} product={products[id]} selector={selectorFunction} />) }
    <Pagination itemsLength={searchProductsLength} />
  </div>
);

const displayFilterForms = () => (
  <div className="container-fluid mt-3 p-0">
    <div className="row mx-0">
      <CategoryFilterForm title={"Kategorija"} defaultEnabled={true} />
      <SearchForm placeholder={"Įveskite pavadinimą"} />
    </div>
  </div>
);

const validateContent = (productsLength, filteredProductsLength) => (
  <div className="mt-3"> 
      { productsLength === 0 ? "Produktų sąrašas yra tuščias" : filteredProductsLength === 0 ? 
          "Tokios kategorijos produktų šiuo metu nėra" : "Paieškos frazę atitinkančių produktų šiuo metu nėra"
      }
  </div> 
);

export default ({ onToggleCategoryForm, onToggleProductForm, productForm, categoryForm , editing, productsLength, 
  filteredProductsLength, productIds, products, selectorFunction, searchProductsLength }) => (
    <div className="app">
      <Menu />
      <div className="app-container">
        <button className="btn btn-primary toggle-button" onClick={onToggleProductForm}>
          {!productForm ? "Pridėti produktą" : "Uždaryti formą"}
        </button>
        { productForm && displayProductForm(editing) }
        <button className="btn btn-primary toggle-button" onClick={onToggleCategoryForm}>
          { !categoryForm ? "Pridėti kategoriją" : "Uždaryti formą" }
        </button> 
        { categoryForm && <AddCategoryForm name={"categoryForm"} fields={categoryFields} /> }
        { displayFilterForms() }
        { searchProductsLength > 0 ? displayContent(productIds, products, selectorFunction, searchProductsLength) : 
            validateContent(productsLength, filteredProductsLength)
        }
      </div>
    </div>
);