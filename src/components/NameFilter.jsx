import React, { useContext } from 'react';
import { mySpaceContext } from '../context';

export default function NameFilter() {
  const { nameFilter, setNameFilter } = useContext(mySpaceContext);
  return (
    <div>
      <label htmlFor="nameFilter">
        Planet name:
        {' '}
        <input
          id="nameFilter"
          data-testid="name-filter"
          type="text"
          value={ nameFilter }
          onChange={ ({ target }) => setNameFilter(target.value) }
        />
      </label>
    </div>
  );
}
