import React, { useContext } from 'react';
import { mySpaceContext } from '../context';

export default function DeepDataFilter() {
  let columnsAvailable = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const {
    columnFilter, setColumnFilter,
    comparisonFilter, setComparisonFilter,
    valueFilter, setValueFilter,
    deepFilter, setDeepFilter,
  } = useContext(mySpaceContext);

  const handleFilter = () => {
    setDeepFilter(deepFilter.concat([{ columnFilter, comparisonFilter, valueFilter }]));
    setColumnFilter('population');
    setComparisonFilter('maior que');
    setValueFilter('');
  };

  if (deepFilter && deepFilter.length > 0) {
    columnsAvailable = columnsAvailable
      .filter((filter) => deepFilter.every((attr) => attr.columnFilter !== filter));
  }

  return (
    <form>
      <label htmlFor="column-filter">
        Column:
        {' '}
        <select
          id="column-filter"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ ({ target }) => setColumnFilter(target.value) }
        >
          { columnsAvailable
            .map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison:
        {' '}
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ ({ target }) => setComparisonFilter(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        {' '}
        <input
          id="value-filter"
          data-testid="value-filter"
          min={ 0 }
          type="number"
          value={ valueFilter.replace(/[^0-9]/ig, '') }
          onChange={ ({ target }) => setValueFilter(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleFilter }
      >
        Filter
      </button>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => setDeepFilter([]) }
      >
        Limpar filtros
      </button>
    </form>
  );
}
