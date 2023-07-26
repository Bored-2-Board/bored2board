/* 
SQL Controller:
  - Creates the connection to SQL Database
  - Establishes Client for Querying and Release for Ending Connection
*/

import { Pool, PoolClient } from 'pg';

const pg_URI = 'postgres://ppyechmx:iYyd2EDRNUYXWhcKagaXJ0JBmKewimkY@mahmud.db.elephantsql.com/ppyechmx';

const pool = new Pool({
  connectionString: pg_URI
})

export default async function connectToDatabase() {

  type sqlFuncs = {
    dbClient?: PoolClient,
    dbRelease?: () => void
  }

  const dbFuncs: sqlFuncs = {};

  try {
    const client = await pool.connect();
    console.log('Connected!');

    dbFuncs.dbClient = client; // PERSISTS CONNECTION THROUGH MIDDLEWARE
    dbFuncs.dbRelease = () => client.release(); // ENDS CONNECTION

    return dbFuncs;

  } catch (error) {
    console.log('Error connecting to SQL Database: ', error);
    throw error;
  }
};
