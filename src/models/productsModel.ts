import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

async function create(data:IProduct): Promise<IProduct> {
  const [{ insertId }] = await connection.execute<{ insertId: number } & RowDataPacket[]>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    Object.values(data),
  );
  
  return { id: insertId, ...data };
}

async function findAll(): Promise<IProduct[]> {
  const [result] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT id, name, amount FROM Trybesmith.Products',
  );

  return result;
}

const toExport = { create, findAll };

export default toExport;
