import CarMaker from '../Domains/CarMaker';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

export default class CarsService {
  private odm: CarsODM;

  constructor() {
    this.odm = new CarsODM();
  }

  async createNewCars(car: ICar) {
    const createdCar = await this.odm.create(car);
    return createdCar ? new CarMaker(createdCar) : undefined;
  }

  async findTheCar(id: string) {
    const carFound = await this.odm.findById(id);
    return carFound ? new CarMaker(carFound as ICar) : undefined;
  }

  async findAllCars() {
    const carsFound = await this.odm.find({});
    return carsFound ? carsFound.map((car: ICar) => new CarMaker(car)) : undefined;
  }

  async updateACar(id: string, data: ICar) {
    const updatedCar = await this.odm.update(id, { $set: data });
    return updatedCar ? new CarMaker(updatedCar as ICar) : updatedCar;
  }
}
