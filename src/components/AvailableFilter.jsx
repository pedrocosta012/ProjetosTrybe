import React, { useContext } from 'react';
import { mySpaceContext } from '../context';

export default function AvailableFilter() {
  const { deepFilter, setDeepFilter } = useContext(mySpaceContext);

  const deleteButton = (item) => {
    setDeepFilter(deepFilter.filter((filtro) => filtro !== item));
  };

  return (
    <div>
      {deepFilter.length > 0 && deepFilter.map((filter, index) => (
        <p key={ index } data-testid="filter">
          <span>
            {`${filter.columnFilter} ${filter.comparisonFilter} ${filter.valueFilter}`}
          </span>
          <button type="button" onClick={ () => deleteButton(filter) }>X</button>
        </p>
      ))}
    </div>
  );
}
