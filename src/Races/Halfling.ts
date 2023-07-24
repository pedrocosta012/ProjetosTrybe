import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static instances = 0;

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Halfling.instances += 1;
    return Halfling.instances;
  }
}
