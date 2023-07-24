import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

const createMissionCards = () => missions
  .map(({ name, year, country, destination }, index) => (
    <MissionCard
      key={ index }
      name={ name }
      year={ year }
      country={ country }
      destination={ destination }
    />
  ));

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { createMissionCards() }
      </div>
    );
  }
}

export default Missions;
