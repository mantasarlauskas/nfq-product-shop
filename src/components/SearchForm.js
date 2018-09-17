import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default ({ onSearch, placeholder }) =>  (
  <form className="col input-group p-0 justify-content-lg-end search-input">
    <div className="col col-lg-5 order-1 order-lg-0 px-0">
      <input 
        type="search" 
        className="form-control"
        placeholder={placeholder}
        id="searchFilter"
        onChange={(event) => onSearch(event.target.value)} 
      />
    </div>
    <label htmlFor="searchFilter" className="col-sm-2 col-lg-auto order-0 order-lg-1 pl-0 col-form-label search-logo">
      <FaSearch />
    </label> 
  </form>        
);