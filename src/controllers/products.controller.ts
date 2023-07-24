import { Request, Response } from 'express';

import productsService from '../services/product.service';
import IProduct from '../interfaces/product.interface';
import IError from '../interfaces/error.interface';

async function addNewProduct(req: Request, res: Response) {
  const { name, amount }: IProduct = req.body;
  const {
    result, error,
  }: {
    result?: IProduct, error?: IError
  } = await productsService.addAProduct(name, amount);
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(201).json(result);
}

async function getAllProducts(_req: Request, res: Response) {
  const dbRequestResult = await productsService.findAllProducts();
  res.status(200).json(dbRequestResult);
}

const toExport = { addNewProduct, getAllProducts };

export default toExport;
