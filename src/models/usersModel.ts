import { RowDataPacket } from 'mysql2';

import connection from './connection';
import IUser from '../interfaces/user.interface';
import { createToken } from '../utils/tokenHandler';

async function create(userData:IUser) {
  console.log(userData);
  
  const [{ insertId }] = await connection.execute<{ insertId: number } & RowDataPacket[]>(
    'INSERT INTO Trybesmith.Users VALUES (?, ?, ?, ?, ?)',
    [null, ...Object.values(userData)],
  );
  
  const result: IUser = { id: insertId, ...userData, token: createToken(userData) };

  return result;
}

const toExport = { create };

export default toExport;
