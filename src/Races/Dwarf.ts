import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static instances = 0;

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Dwarf.instances += 1;
    return Dwarf.instances;
  }
}
