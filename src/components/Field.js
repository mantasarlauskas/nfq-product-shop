import React from 'react';
import { Field } from 'redux-form';
import { Input, Textarea, Select } from './Fields';
import { required, maxLength250, maxLength30 } from '../formValidation';

const getComponent = component => component === "select" ? Select : component === "input" ? Input : Textarea;

const parse = (type, component) => type === "number" || component === "select" ? 
  value => value !== '' ? Number(value) : value : undefined;

const getValidation = component => component === "input" ? [required, maxLength30] : component === "textarea" ? 
  [required, maxLength250] : [required];

export default ({ field: { id, title, type, component }, index, editing, options, optionIds }) => (
    <Field 
      key={index}
      name={id} 
      label={title} 
      editing={editing}
      id={id}
      parse={parse(type, component)}
      component={getComponent(component)}
      validate={getValidation(component)} 
      type={type}
      optionIds={optionIds} 
      options={options} 
    />
);