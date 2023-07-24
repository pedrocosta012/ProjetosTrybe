import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const mySpaceContext = createContext();

function ContextOfTheForce({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [deepFilter, setDeepFilter] = useState([]);
  return (
    <mySpaceContext.Provider
      value={ {
        nameFilter,
        setNameFilter,

        columnFilter,
        setColumnFilter,

        comparisonFilter,
        setComparisonFilter,

        valueFilter,
        setValueFilter,

        deepFilter,
        setDeepFilter,
      } }
    >
      {children}
    </mySpaceContext.Provider>
  );
}

ContextOfTheForce.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default ContextOfTheForce;
