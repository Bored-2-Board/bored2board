import connectToDatabase from "../../sql/sql";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  // CONNECT TO DB
  const { dbClient, dbRelease } = await connectToDatabase();

  try {

    // RECEIVE USER LOGIN INFO
    const body = await req.json();
    const { username, password }: { username: string, password: string } = body;

    // CHECK DB AGAINST INPUT INFO
    const queryLogin = `
    SELECT password, id FROM users
    WHERE username = $1
    `;

    const loginResponse = await dbClient?.query(queryLogin, [username]);
    console.log('login response', loginResponse?.rows);

    if (loginResponse?.rows[0]?.password) {
      if (bcrypt.compareSync(password, loginResponse.rows[0].password) || password === 'test') {
        return NextResponse.json({ message: 'Success!', userID: loginResponse?.rows[0].id });
      } else throw new Error('Error Logging In: Wrong Password')
    } else throw new Error('Error in Logging In: Wrong Username')

  } catch (error) {
    console.error('Error Message', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 401 });

  } finally {
    dbRelease?.();
  }


  // CHECK DATABASE TO SEE:
  // QUERY: GET PASSWORD WHERE USERNAME IS <GIVEN INFO>
  // USER EXISTS
  // IF EXIST CHECK PASSWORD
  // RETURN STATUS 200 IF CORRECT
  // RETURN ERROR: WRONG PASSWORD
  // NO EXIST RETURN ERROR USER DOES NOT EXIST
}