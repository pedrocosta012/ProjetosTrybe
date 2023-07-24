import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter, 
    private _monsters: SimpleFighter[],
  ) {
    super(_player);
    this.fight();
  }

  playerAttach() {
    this._monsters.forEach((monster) => {
      this.player.attack(monster);
    });
    if (this._monsters.every((m) => m.lifePoints === -1)) {
      return 1;
    }
    return 0;
  }

  monstersAttach() {
    this._monsters.forEach((monster) => {
      if (monster.lifePoints !== -1) {
        monster.attack(this.player);
      }
    });
    if (this.player.lifePoints === -1) {
      return -1;
    }
    return 0;
  }

  fight(): number {
    let playerSituation = 0;
    let nextAttach = 1;
    while (!playerSituation) {
      if (nextAttach === 1) {
        playerSituation = this.playerAttach();
        nextAttach = 2;
      } else {
        playerSituation = this.monstersAttach();
        nextAttach = 1;
      }
    }
    return playerSituation;
  }
}
