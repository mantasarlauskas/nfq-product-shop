import React from 'react';
import Field from './Field';

export default ({ handleSubmit, fields, editing, options, optionIds }) => (
  <form className="form clearfix" onSubmit={handleSubmit} noValidate>
    { fields.map((field, index) => 
        <Field 
          key={index} 
          field={field} 
          index={index} 
          editing={editing} 
          optionIds={optionIds}
          options={options} 
        />
      ) 
    }
    <button className="btn btn-primary" type="submit">
        { editing !== null && editing !== undefined ? "Redaguoti" : "Siųsti" }
    </button>
  </form>
);