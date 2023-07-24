import MotorcycleMaker from '../Domains/MotorcycleMaker';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcyclesService {
  private odm: MotorcyclesODM;

  constructor() {
    this.odm = new MotorcyclesODM();
  }

  async registerNewMotorcycles(motorcycles: IMotorcycle) {
    const registeredMotorcycle = await this.odm.create(motorcycles);
    return registeredMotorcycle;
  }

  async findAMotorcycle(id: string) {
    const motorcycleFound = await this.odm.findById(id);
    return motorcycleFound ? new MotorcycleMaker(motorcycleFound as IMotorcycle) : motorcycleFound;
  }

  async findAllMotorcycles() {
    const motorcycleFound = await this.odm.find({});
    return motorcycleFound 
      ? motorcycleFound.map((motorcycle) => new MotorcycleMaker(motorcycle as IMotorcycle))
      : motorcycleFound;
  }

  async updateMotorcycle(id: string, data: IMotorcycle) {
    const updatedMotorcycle = await this.odm.update(id, { $set: data });
    return updatedMotorcycle 
      ? new MotorcycleMaker(updatedMotorcycle as IMotorcycle) 
      : updatedMotorcycle;
  }
}
