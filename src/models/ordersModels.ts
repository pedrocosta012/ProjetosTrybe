import { ResultSetHeader } from 'mysql2';
import IOrdersData from '../interfaces/reqOrdersInterface';
import connection from './connection';

async function findAll(): Promise<IOrdersData[]> {
  const result = await connection.execute<IOrdersData[] & ResultSetHeader>(
    `SELECT O.id AS id, O.userId AS userId, JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P
    ON O.id = P.orderId
    GROUP BY O.id`,
  );

  return result[0];
}

const toExport = { findAll };

export default toExport;
