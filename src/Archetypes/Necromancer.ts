import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static instances = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer.instances += 1;
    return Necromancer.instances;
  }
  
  get energyType(): EnergyType { return this._energyType; }
}
