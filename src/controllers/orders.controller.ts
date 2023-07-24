import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAllOrders(_req: Request, res: Response) {
  const result = await ordersService.getOrders();
  res.status(200).json(result);
}

const toExport = { getAllOrders };

export default toExport;
