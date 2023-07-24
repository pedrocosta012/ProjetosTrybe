import IError from './error.interface';
import IProduct from './product.interface';

export default interface IAddNewProductReturn {
  result: IProduct;
  error: IError;
}
