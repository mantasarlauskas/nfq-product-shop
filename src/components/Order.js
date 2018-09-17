import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Highlighter from "react-highlight-words";
import dateformat from 'dateformat';
import ReactTooltip from 'react-tooltip';

export default ({ id, date, products, totalPrice, onRemove, onChange, orderSearchFilter }) => (
  <div className="media item">
    <div className="media-body">
      <h5 className="mt-0 mb-3 clearfix">
        <div className="item-title">
            <Highlighter 
              highlightClassName="highlight-text p-0"
              searchWords={[orderSearchFilter]}
              autoEscape={true}
              textToHighlight={"Užsakymas numeris " + id} 
            />
        </div>
        <div className="item-actions">
          <FaTrashAlt data-tip='Šalinti' onClick={() => onRemove(id)} />
        </div>
      </h5>
      <div className="font-weight-bold">
        Data:&nbsp;
        <span className="font-weight-normal">
          <Highlighter 
            highlightClassName="highlight-text p-0"
            searchWords={[orderSearchFilter]}
            autoEscape={true}
            textToHighlight={dateformat(date, 'yyyy/mm/dd HH:MM')} 
          />
        </span>
      </div>
      <div className="font-weight-bold">
        Produktų skaičius:&nbsp;
        <span className="font-weight-normal">
          { products.length } { products.length > 0 && <Link to={"/order/" + id} onClick={onChange}>peržiūrėti</Link> }
        </span>
      </div>
      <div className="font-weight-bold">
        Bendra suma: <span className="font-weight-normal">${ totalPrice }</span>
      </div>
    </div>
    <ReactTooltip />
  </div>
);

