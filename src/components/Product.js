import React from 'react';
import { FaPencilAlt, FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import Highlighter from "react-highlight-words";
import ReactTooltip from 'react-tooltip';

export default ({ product: { name, price, description, count, id }, logo, onRemove, 
  editing, onEdit, orderIndex, onAddToOrder, onRemoveFromOrder, orderId, productSearchFilter }) =>  (
    <div className="media item">
      <img className="mr-3 logo" src={logo ? logo : "/img/default.png"} alt="Logo" />
      <div className="media-body">
        <h5 className="mt-0 clearfix">
          <div className="item-title">
              <Highlighter 
                highlightClassName="highlight-text p-0"
                searchWords={[productSearchFilter]}
                autoEscape={true}
                textToHighlight={name} 
              />
          </div>
          <div className="item-actions">
            { orderIndex === undefined && count > 0 && <FaPlusCircle data-tip='Įtraukti į užsakymą' onClick={onAddToOrder}/> }
            { orderIndex === undefined && <FaPencilAlt data-tip='Redaguoti' onClick={() => { window.scrollTo(0, 0); onEdit() }} /> }
            { orderIndex === undefined && editing !== id && <FaTrashAlt data-tip='Šalinti' onClick={onRemove} /> }
            { orderIndex !== undefined && orderId === undefined && 
                <FaMinusCircle data-tip='Šalinti iš užsakymo' onClick={onRemoveFromOrder} /> 
            }
          </div>
        </h5>
        <div className="item-price">Kaina: ${ price }</div>
        { orderIndex === undefined && <div className="item-count">Vienetų skaičius: { count }</div> }
        <div className="description mt-2">{ description }</div>   
      </div>
      <ReactTooltip />
    </div>
);
