import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static instances = 0;

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Orc.instances += 1;
    return Orc.instances;
  }
}
