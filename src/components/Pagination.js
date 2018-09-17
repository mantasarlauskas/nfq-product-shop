import React from 'react';
import ReactPaginate from 'react-paginate';

export default ({ itemsLength, itemsPerPage, pageNumber, onPageChange }) => (
  <div className="pagination-wrapper">
    <ReactPaginate 
      previousLabel="&laquo;"
      nextLabel="&raquo;"
      forcePage={pageNumber} 
      pageCount={Math.ceil(itemsLength/itemsPerPage)}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={(data) => onPageChange(data.selected)}
      nextClassName={"page-item"}
      previousClassName={"page-item"}
      nextLinkClassName={"page-link"}
      previousLinkClassName={"page-link"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      containerClassName={"pagination"}
      activeClassName={"active"} 
    />
  </div>
);