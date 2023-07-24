import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleMaker implements IMotorcycle {
  readonly id?: string;
  readonly category: string;
  readonly engineCapacity: number;
  readonly model: string;
  readonly year: number;
  readonly color: string;
  readonly status: boolean;
  readonly buyValue: number;

  constructor(motorcycle: IMotorcycle) {
    if (this.isNotFalsy(motorcycle._id)) {
      this.id = motorcycle._id;
    } else {
      this.id = this.isNotFalsy(motorcycle.id) ? motorcycle.id : undefined;
    }
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.status = motorcycle.status || false;
    this.buyValue = motorcycle.buyValue;
  }

  isNotFalsy(value: unknown) {
    return Boolean(value);
  }
}
