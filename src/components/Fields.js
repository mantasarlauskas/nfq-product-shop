import React from 'react';

const getClass = editing => editing !== null && editing !== undefined ? "edit-input form-control mb-2" : "form-control mb-2";

const displayError = (touched, error) => touched && error && <div className="alert alert-danger py-1" role="alert">{ error }</div>;

export const Input = ({ input, editing, id, label, type, meta: { touched, error } }) => (
  <div className="form-group mb-4">
    <label htmlFor={id}>{ label }</label>
    <input 
      {...input} 
      id={id} 
      type={type} 
      className={getClass(editing)} 
    />
    { displayError(touched, error) }
  </div>
);

export const Textarea = ({ input, editing, id, label, meta: { touched, error } }) => (
  <div className="form-group mb-4">
    <label htmlFor={id}>{ label }</label>
    <textarea 
      {...input} 
      id={id} 
      className={getClass(editing)} 
    />
    { displayError(touched, error) }
  </div>
);

export const Select = ({ input, id, label, editing, optionIds, options, meta: { touched, error } }) => (
  <div className="form-group mb-4">
    <label htmlFor={id}>{ label }</label>
    <select  
      {...input} 
      id={id}
      className={getClass(editing)}
    >
      <option value="" disabled hidden>Pasirinkite kategoriją</option>
      { optionIds.map(id => <option key={id} value={id}>{ options[id].name }</option>) }
    </select>
    { displayError(touched, error) }
  </div>
);