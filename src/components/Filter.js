import React from 'react';

export default ({ items, itemIds, onFilter, title, defaultEnabled }) => (
  <form className="col-lg input-group p-0">
    <label htmlFor="productFilter" className="col-lg-auto col-sm-2 pl-0 col-form-label">{ title }</label>
    <div className="col col-lg-6 px-0">
      <select 
        className="form-control" 
        id="productFilter" 
        onChange={(event) => onFilter(event.target.value)}
      >
        { defaultEnabled && <option value="-1">Visi</option> }
        { itemIds.map(id => <option key={id} value={id}>{ items[id].name }</option>) }
      </select>
    </div>
  </form>        
);