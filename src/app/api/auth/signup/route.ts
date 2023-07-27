import connectToDatabase from "../../sql/sql";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  // CONNECT TO DB
  const { dbClient, dbRelease } = await connectToDatabase();

  try {

    // RECEIVE USER LOGIN INFO
    const body = await req.json();
    const { email, name, username, password }: { email: string, name: string, username: string, password: string } = body;

    // BCRYPT PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);

    // ADD TO DB
    const queryRegister = `
    INSERT INTO users (email, display_name, username, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id, display_name, email
    `;

    const registerResponse = await dbClient?.query(queryRegister, [email, name, username, hashPassword]);
    console.log('registerResponse', registerResponse?.rows);

    const { id }: { id: number } = registerResponse?.rows[0];

    if (registerResponse?.rows[0]?.id) {
      return NextResponse.json({ message: 'Success!', userID: id, name, email });
    } else throw new Error('Error in Signing Up: User Already Exists')

  } catch (error) {
    console.error('Error Message', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 401 });

  } finally {
    dbRelease?.();
  }
}