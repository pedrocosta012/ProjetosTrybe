import ICar from '../Interfaces/ICar';

export default class CarMaker implements ICar {
  readonly id?: string;
  readonly model: string;
  readonly year: number;
  readonly color: string;
  readonly status: boolean;
  readonly buyValue: number;
  readonly doorsQty: number;
  readonly seatsQty: number;

  constructor(car: ICar) {
    if (this.isNotFalsy(car._id)) {
      this.id = car._id;
    } else {
      this.id = this.isNotFalsy(car.id) ? car.id : undefined;
    }
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  private isNotFalsy(value: unknown) {
    return Boolean(value);
  }
}
