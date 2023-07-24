import { Request, Response } from 'express';
import MotorcyclesService from '../Services/motorcycles.service';
import MotorcycleMaker from '../Domains/MotorcycleMaker';

const OBJECT_ERROR_MOTORCYCLE_NOT_FOUND = { message: 'Motorcycle not found' };

export default class MotorcyclesController {
  private service: MotorcyclesService;

  constructor(private req: Request, private res: Response) {
    this.service = new MotorcyclesService();
  }

  async registerNewMotorcycles() {
    const newMotorcycle = await this.service.registerNewMotorcycles(
      new MotorcycleMaker(this.req.body),
    );

    if (!newMotorcycle) {
      return this.res.status(404).json({ message: 'Não foi possível registrar' });
    }
    
    this.res.status(201).json(new MotorcycleMaker(newMotorcycle));
  }

  async findTheMotorcycle() {
    const { id } = this.req.params;
    const motorcycleFound = await this.service.findAMotorcycle(id);
    if (!motorcycleFound) {
      return this.res.status(404).json(OBJECT_ERROR_MOTORCYCLE_NOT_FOUND);
    }
    this.res.status(200).json(motorcycleFound);
  }

  async findAllMotorcycles() {
    const motorcycleFound = await this.service.findAllMotorcycles();
    if (!motorcycleFound) {
      return this.res.status(404).json(OBJECT_ERROR_MOTORCYCLE_NOT_FOUND);
    }
    this.res.status(200).json(motorcycleFound);
  }

  async updateMotorcycle() {
    const { id } = this.req.params;
    const updatedMotorcycle = await this.service.updateMotorcycle(
      id,
      new MotorcycleMaker(this.req.body),
    );
    if (!updatedMotorcycle) {
      return this.res.status(404).json(OBJECT_ERROR_MOTORCYCLE_NOT_FOUND);
    }
    this.res.status(200).json(updatedMotorcycle);
  }
}
