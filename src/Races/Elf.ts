import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static instances = 0;

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Elf.instances += 1;
    return Elf.instances;
  }
}
