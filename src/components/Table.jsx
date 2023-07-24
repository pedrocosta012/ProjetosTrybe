import React, { useState, useEffect, useContext } from 'react';
import { mySpaceContext } from '../context';

export default function Table() {
  const [resultRequest, setResultRequest] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const { nameFilter, deepFilter } = useContext(mySpaceContext);

  const tableColumn = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'url',
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();

      results.forEach((element) => {
        delete element.residents;
      });

      setResultRequest(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtering = resultRequest
      .filter((item) => item.name.toLowerCase().includes(nameFilter.toLowerCase()));

    deepFilter.forEach((item) => {
      switch (item.comparisonFilter) {
      case 'maior que':
        filtering = filtering
          .filter(
            (planet) => Number(planet[item.columnFilter]) > Number(item.valueFilter),
          );
        break;
      case 'menor que':
        filtering = filtering
          .filter(
            (planet) => Number(planet[item.columnFilter]) < Number(item.valueFilter),
          );
        break;
      case 'igual a':
        filtering = filtering
          .filter(
            (planet) => Number(planet[item.columnFilter]) === Number(item.valueFilter),
          );
        break;
      default:
        filtering = [...filtering];
        break;
      }
    });
    setFilteredResults(filtering);
  }, [resultRequest, nameFilter, deepFilter]);

  if (resultRequest.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            {tableColumn.map((item) => (<th key={ item }>{item}</th>))}
          </tr>
        </thead>
        <tbody>
          {filteredResults
            .map((
              { name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
                diameter, climate, gravity, terrain, surface_water: surfaceWater,
                population, films, created, edited, url,
              }, index,
            ) => (
              <tr key={ index }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
  return <span>Loading...</span>;
}
