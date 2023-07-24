import Fighter from '../Fighter';
import Battle from './Battle';
import getRandomInt from '../utils';

export default class PVP extends Battle {
  private nextPlayerAttach = getRandomInt(1, 2);

  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
    this.fight();
  }

  player1Attack(): number {
    this.player1.attack(this.player2);
    if (this.player2.lifePoints === -1) return 1;
    return 0;
  }

  player2Attack(): number {
    this.player2.attack(this.player1);
    if (this.player1.lifePoints === -1) return -1;
    return 0;
  }

  fight(): number {
    let player1Situation = 0;
    while (!player1Situation) {
      if (this.nextPlayerAttach === 2) {
        player1Situation = this.player1Attack();
        this.nextPlayerAttach = 1;
      } else {
        player1Situation = this.player2Attack();
        this.nextPlayerAttach = 2;
      }
    }
    return player1Situation;
  }
}
