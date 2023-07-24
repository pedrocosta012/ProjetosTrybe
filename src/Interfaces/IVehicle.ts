import IIdAttribute from './IIdAttribute';
import IMongoPK from './IMongoPK';

export default interface IVehicle extends IIdAttribute, IMongoPK {
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}
