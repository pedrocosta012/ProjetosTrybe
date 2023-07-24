import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static instances = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Mage.instances += 1;
    return Mage.instances;
  }
  
  get energyType(): EnergyType { return this._energyType; }
}
