import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const createPlanets = () => planets
  .map((planetData, index) => {
    const { name, image } = planetData;
    return (<PlanetCard key={ index } planetName={ name } planetImage={ image } />);
  });

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { createPlanets() }
      </div>
    );
  }
}

export default SolarSystem;
