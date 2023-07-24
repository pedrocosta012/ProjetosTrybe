import { DataTypes, Model } from 'sequelize';
import db from '.';
import Matches from './Matches';
// import OtherModel from './OtherModel';

class Team extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare teamName: string;
}

Team.init({
  // ... Campos
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'Team',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Matches.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

// Team.hasMany(Matches, { foreignKey: 'homeTeam', as: 'teamHome' });
// Team.hasMany(Matches, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Team;
