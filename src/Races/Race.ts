export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {}

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  abstract get maxLifePoints(): number;

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}
