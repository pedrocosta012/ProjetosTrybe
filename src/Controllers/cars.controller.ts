import { Request, Response } from 'express';
import CarsService from '../Services/cars.service';
import CarMaker from '../Domains/CarMaker';

export default class CarsController {
  private service: CarsService;

  constructor(
    private req: Request,
    private res: Response,
  ) {
    this.service = new CarsService();
  }
  
  async registerNewCar() {
    const newCar = await this.service.createNewCars(new CarMaker(this.req.body));
    if (newCar) {
      return this.res.status(201).send(newCar);
    }
    return this.res.status(400).send({ message: 'Não foi possível registar' });
  }

  async findOne() {
    const { id } = this.req.params;
    const carFound = await this.service.findTheCar(id);
    if (carFound) {
      return this.res.status(200).send(carFound);
    }
    return this.res.status(404).send({ message: 'Car not found' });
  }

  async findAll() {
    const allCars = await this.service.findAllCars();
    if (allCars) {
      return this.res.status(200).send(allCars);
    }
    return this.res.status(404).send({ message: 'Não foi possível encontrar' });
  }

  async updateACar() {
    const { id } = this.req.params;
    const updatedCar = await this.service.updateACar(id, new CarMaker(this.req.body));
    if (!updatedCar) {
      this.res.status(404).json({ message: 'Car not found' });
    }
    this.res.status(200).json(updatedCar);
  }
}
